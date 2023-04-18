import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './Home';
import UserList from './UserList';
import AddUser from './AddUser';

const Stack = createNativeStackNavigator()

const Dashboard = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='UserList' component={UserList} />
        <Stack.Screen name='AddUser' component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Dashboard