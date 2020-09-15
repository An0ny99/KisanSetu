import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Splashscreen} from '../components/Splashscreen';
import Login from '../components/Login';
import Register from '../components/Register';


const AuthStack = createStackNavigator();

export  function AuthStackNavigator() {
  return (
      <AuthStack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <AuthStack.Screen name={'Splashscreen'} component={Splashscreen} />
        <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'Register'} component={Register} />
      </AuthStack.Navigator>
  )
}

