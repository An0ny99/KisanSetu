import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Splashscreen} from './components/Splashscreen'
import { AuthStackNavigator } from './navigators/AuthStackNavigator';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{
        headerShown: false,
      }} >
        <RootStack.Screen name={'RootStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

