import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DogList from './src/components/DogList';
import DogShow from './src/components/DogShow';
import { Actions } from 'react-native-router-flux';


const App = StackNavigator({
  Home: { screen: DogList },
  Profile: { screen: DogShow },
});

class tapak extends Component {
  render() {
    return (
      <App />
    );
  }
}



export default App;

AppRegistry.registerComponent('dogtime-react-native', () => App);

