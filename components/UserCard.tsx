import React from 'react';
import { 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon
} from '@ionic/react';
import { personCircle, mailOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const UserCard: React.FC<{ user: any }> = ({ user }) => {
  const history = useHistory();

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          <IonIcon icon={personCircle} slot="start" />
          {user.name}
        </IonCardTitle>
        <IonCardSubtitle>
          <IonIcon icon={mailOutline} slot="start" />
          {user.email}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Company: {user.company.name}</p>
        <p>Phone: {user.phone}</p>
        <IonButton 
          fill="outline" 
          onClick={() => history.push(`/user/${user.id}`)}
        >
          View Profile
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default UserCard;
