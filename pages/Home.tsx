import React, { useState, useEffect } from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonButton, 
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonBadge
} from '@ionic/react';
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

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Магазин</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLoading isOpen={loading} message="Загрузка..." />
        
        {error && (
          <div className="ion-padding ion-text-center">
            <p>{error}</p>
            <IonButton onClick={() => window.location.reload()}>Попробовать снова</IonButton>
          </div>
        )}

        <IonList>
          {products.map(product => (
            <IonCard key={product.id} routerLink={`/product/${product.id}`}>
              <IonImg src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
              <IonCardHeader>
                <IonCardTitle>{product.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{product.price} $</p>
                <IonBadge color="success">{product.rating.rate} ★</IonBadge>
                <IonButton 
                  slot="end"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  В корзину
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
