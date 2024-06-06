import {View, Text} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home/HomeScreen';
import { LoginScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
