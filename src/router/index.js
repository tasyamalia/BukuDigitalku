import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../pages';

const Stack = createStackNavigator();


const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
