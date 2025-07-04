import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/detail/:id" component={Detail} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
