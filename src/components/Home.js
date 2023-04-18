import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    console.log("Home");

    return (
        <View>
            <Text>Home</Text>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('UserList')}
                    style={styles.touchableButton}            
                >
                    <Text style={styles.touchableButtonText}>Go To Userlist</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop:10 }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AddUser')}
                    style={styles.touchableButton}            
                >
                    <Text style={styles.touchableButtonText}>Add User</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableButton:{
        backgroundColor : 'red',
        padding:15,
    },
    touchableButtonText : {
        textAlign : 'center',
        color:'white'
    }
})

export default Home