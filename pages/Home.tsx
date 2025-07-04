import React, { useState, useEffect } from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonBadge,
  IonIcon,
  IonList
} from '@ionic/react';
import { newspaper, people } from 'ionicons/icons';
import PostCard from '../components/PostCard';
import UserCard from '../components/UserCard';
import { fetchPosts, fetchUsers } from '../services/api';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [posts, setPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsData, usersData] = await Promise.all([
          fetchPosts(),
          fetchUsers()
        ]);
        setPosts(postsData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error loading data:', error);
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
          <IonTitle>DZ2 Mobile App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTabs onIonTabsDidChange={e => setActiveTab(e.detail.tab)}>
          <IonTabBar slot="top">
            <IonTabButton tab="posts" href="#">
              <IonIcon icon={newspaper} />
              <IonLabel>Posts</IonLabel>
              <IonBadge>{posts.length}</IonBadge>
            </IonTabButton>
            <IonTabButton tab="users" href="#">
              <IonIcon icon={people} />
              <IonLabel>Users</IonLabel>
              <IonBadge>{users.length}</IonBadge>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        {loading ? (
          <div className="ion-padding">Loading...</div>
        ) : activeTab === 'posts' ? (
          <IonList>
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </IonList>
        ) : (
          <IonList>
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
