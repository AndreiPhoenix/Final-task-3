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
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../services/api';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPostById(id);
        setPost(data);
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Post Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <IonLoading isOpen={true} message={'Loading...'} />
        ) : post ? (
          <IonList>
            <IonItem>
              <IonLabel>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>User ID: {post.userId}</h3>
              </IonLabel>
            </IonItem>
          </IonList>
        ) : (
          <div className="ion-padding">Post not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PostDetail;
