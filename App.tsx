import {View, Text} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <View>
          <Text>App</Text>
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
