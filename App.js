// import React from 'react';
// import {
//   StyleSheet,
// } from 'react-native';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

import {Home} from './components/home';
import {Profile} from './components/profile';

// const styles = StyleSheet.create({
//   app: {
//     backgroundColor: Colors.darker,
//   },
// });

// const App = () => {

//   return (
//     <Home />
//   );
// };

// export default App;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;