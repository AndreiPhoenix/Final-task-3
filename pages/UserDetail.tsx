import React, { useState, useEffect } from 'react';
import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../services/api';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadUser();
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <IonLoading isOpen={true} message={'Loading...'} />
        ) : user ? (
          <>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{user.name}</IonCardTitle>
                <IonCardSubtitle>@{user.username}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
              </IonCardContent>
            </IonCard>

            <IonList>
              <IonItem>
                <IonLabel>
                  <h2>Address</h2>
                  <p>
                    {user.address.street}, {user.address.suite}<br />
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Company</h2>
                  <p>{user.company.name}</p>
                  <p>{user.company.catchPhrase}</p>
                  <p>{user.company.bs}</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </>
        ) : (
          <div className="ion-padding">User not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default UserDetail;
