import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonList } from '@ionic/react';
import { fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleReadMore = (id: number) => {
    history.push(`/post/${id}`);
  };

  const navigateToAbout = () => {
    history.push('/about');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blog Posts</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={navigateToAbout}>About</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <IonList>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onReadMore={handleReadMore} />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
