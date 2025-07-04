import React, { useState, useEffect } from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonBadge,
  IonToast
} from '@ionic/react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useCartStore } from '../store/cartStore';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Не удалось загрузить товар');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Детали товара</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading isOpen={loading} message="Загрузка..." />
        
        {error && (
          <div className="ion-padding ion-text-center">
            <p>{error}</p>
            <IonButton routerLink="/">На главную</IonButton>
          </div>
        )}

        {product && (
          <IonCard>
            <IonImg src={product.image} style={{ height: '300px', objectFit: 'contain' }} />
            <IonCardHeader>
              <IonCardTitle>{product.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{product.description}</p>
              <p><strong>Цена:</strong> {product.price} $</p>
              <p><strong>Категория:</strong> {product.category}</p>
              <IonBadge color="success">
                {product.rating.rate} ★ ({product.rating.count} отзывов)
              </IonBadge>
              <IonButton expand="block" onClick={handleAddToCart}>
                Добавить в корзину
              </IonButton>
            </IonCardContent>
          </IonCard>
        )}

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Товар добавлен в корзину!"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
