import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h2>About Our App</h2>
            <p>This is a mobile-optimized React application built with Ionic.</p>
            <p>It demonstrates how to use Ionic components in a React project.</p>
          </IonCardContent>
        </IonCard>
        
        <IonButton expand="block" routerLink="/">
          Back to Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default About;
