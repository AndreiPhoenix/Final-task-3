import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import UserDetail from './pages/UserDetail';
import About from './pages/About';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={PostDetail} />
        <Route exact path="/user/:id" component={UserDetail} />
        <Route exact path="/about" component={About} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
