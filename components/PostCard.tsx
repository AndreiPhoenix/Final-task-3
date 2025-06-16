import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { Post } from '../services/api';

interface PostCardProps {
  post: Post;
  onReadMore: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onReadMore }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{post.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{post.body.substring(0, 100)}...</p>
        <IonButton fill="clear" onClick={() => onReadMore(post.id)}>
          Read More
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PostCard;
