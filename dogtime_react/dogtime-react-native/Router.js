import React from 'react';
import { Scene, Router, Actions, Stack, Modal } from 'react-native-router-flux';
import DogList from './src/components/DogList';
import DogShow from './src/components/DogShow';
import BookModal from './src/components/BookModal';


const Routercomponent = () => (
  <Router>
      <Stack key="root">
        <Scene key="dogList" component={DogList} title="DogList"/>
        <Scene key="dogShow" component={DogShow} title="DogShow"/>
        <Scene key="bookModal" component={BookModal} />
      </Stack>
  </Router>
);

export default Routercomponent;
