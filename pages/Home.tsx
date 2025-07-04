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
  IonAlert
} from '@ionic/react';
import { fetchArticles } from '../services/api';
import ItemCard from '../components/ItemCard';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>News App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <IonLoading isOpen={true} message={'Loading...'} />
        ) : error ? (
          <IonAlert
            isOpen={true}
            header={'Error'}
            message={error}
            buttons={['OK']}
          />
        ) : (
          <>
            <IonButton routerLink="/about" expand="block">
              Go to About
            </IonButton>
            
            <IonList>
              {articles.map((article) => (
                <ItemCard key={article.id} article={article} />
              ))}
            </IonList>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
