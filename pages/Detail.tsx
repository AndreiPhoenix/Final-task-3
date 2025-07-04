import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonLoading
} from '@ionic/react';
import { useParams } from 'react-router';
import { fetchArticleById } from '../services/api';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchArticleById(id);
        setArticle(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadArticle();
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Article Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <IonLoading isOpen={true} message={'Loading...'} />
        ) : article ? (
          <div className="ion-padding">
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </div>
        ) : (
          <div className="ion-padding">Article not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Detail;
