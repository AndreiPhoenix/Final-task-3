import React from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonThumbnail, 
  IonImg, 
  IonButton,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonToast
} from '@ionic/react';
import { useCartStore } from '../store/cartStore';

const Cart: React.FC = () => {
  const { items, removeFromCart, clearCart } = useCartStore();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setToastMessage('Заказ оформлен!');
    setShowToast(true);
    clearCart();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Корзина</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {items.map((item) => (
            <IonItem key={item.id}>
              <IonThumbnail slot="start">
                <IonImg src={item.image} />
              </IonThumbnail>
              <IonLabel>
                <h3>{item.title}</h3>
                <p>{item.price} $ × {item.quantity}</p>
                <p>Итого: {(item.price * item.quantity).toFixed(2)} $</p>
              </IonLabel>
              <IonButton 
                slot="end" 
                color="danger"
                onClick={() => removeFromCart(item.id)}
              >
                Удалить
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        {items.length > 0 ? (
          <IonCard>
            <IonCardContent>
              <h2>Общая сумма: {total.toFixed(2)} $</h2>
              <IonButton expand="block" onClick={handleCheckout}>
                Оформить заказ
              </IonButton>
            </IonCardContent>
          </IonCard>
        ) : (
          <div className="ion-padding ion-text-center">
            <p>Ваша корзина пуста</p>
            <IonButton routerLink="/">Вернуться к покупкам</IonButton>
          </div>
        )}

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Cart;
