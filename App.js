import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import Dashboard from './src/components/Dashboard';
import store from './src/redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';

LogBox.ignoreAllLogs(true)

export default function App() {

  // const setUserList = async () =>{
  //   try {
  //     const response = await AsyncStorage.getItem('users')
  //   } catch (error) {

  //   }
  // }

  const getUsers = async () => {
    try {
      const asyncResponse = await AsyncStorage.getItem('users');
      const response = JSON.parse(asyncResponse);
      if (response !== null && response !== undefined) {
        console.log(response)
      }
    } catch (error) {
      console.error(error.message);
      return []
    }
  }

  useEffect(() => {
    getUsers()
  },[])


  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}


