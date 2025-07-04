import React from 'react';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton 
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const PostCard: React.FC<{ post: any }> = ({ post }) => {
  const history = useHistory();

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{post.title}</IonCardTitle>
        <IonCardSubtitle>Post ID: {post.id}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{post.body.substring(0, 100)}...</p>
        <IonButton 
          fill="outline" 
          onClick={() => history.push(`/post/${post.id}`)}
        >
          View Details
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PostCard;
