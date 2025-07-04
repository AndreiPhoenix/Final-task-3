import React from 'react';
import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>FrontDZ2 Mobile Version</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is a mobile adaptation of the original FrontDZ2 project using Ionic React framework.</p>
            <p>Features:</p>
            <ul>
              <li>Mobile-friendly UI</li>
              <li>Native-like navigation</li>
              <li>Optimized for touch devices</li>
              <li>Adaptive design</li>
            </ul>
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
