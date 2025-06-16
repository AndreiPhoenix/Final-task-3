import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonBackButton, IonCard, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router';

const About: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2>About This App</h2>
            <p>
              This is a mobile application built with Ionic React that demonstrates integration with a public API (JSONPlaceholder).
            </p>
            <p>
              The app shows a list of blog posts and allows users to view details of each post.
            </p>
            <IonButton expand="block" onClick={() => history.goBack()}>
              Go Back
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
