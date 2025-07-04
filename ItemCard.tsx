import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';

const ItemCard: React.FC<{ article: any }> = ({ article }) => {
  const history = useHistory();

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{article.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{article.body.substring(0, 100)}...</p>
        <IonButton 
          fill="outline" 
          onClick={() => history.push(`/detail/${article.id}`)}
        >
          Read More
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default ItemCard;
