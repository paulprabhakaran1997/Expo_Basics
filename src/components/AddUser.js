import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/reducers/userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddUser = () => {

    const { userList } = useSelector((state) => state.userReducer);
    console.log("UserList = " , userList);

    const dispatch = useDispatch()

    const defaultUserValue = useMemo(() =>{
        return {
            name : '',
            age : '',
            address : ''
        }
    },[])

    const [userDetails , setUserDetails] = useState(defaultUserValue)

    const handleInput = (value , name) => {
        setUserDetails({
            ...userDetails,
            [name] : value
        })
    }

    const saveForm = async () =>{
        userDetails.address = (userDetails.address).split("\n").join(" ")
        console.log("UserDetails = " , userDetails);

        const newUserDetails = [...userList , userDetails];

        console.log(("New User Details = " , newUserDetails));

        try {
            await AsyncStorage.setItem('users' , JSON.stringify(newUserDetails))
        } catch (error) {
            console.error(error.message);
        }

        dispatch(addUser(newUserDetails))

        setUserDetails(defaultUserValue);
    }

    return (
        <View style={{ padding : 10 }}>
            <Text>AddUser</Text>
            <View style={styles.inputView}>
                <Text>Name</Text>
                <TextInput
                    style ={styles.input}
                    value={userDetails.name}
                    onChangeText={(name) => handleInput(name , 'name')}
                />
            </View>
            <View style={styles.inputView}>
                <Text>Age</Text>
                <TextInput 
                    style ={styles.input}
                    keyboardType = 'number-pad'
                    value={userDetails.age}
                    onChangeText={(age) => handleInput(age , 'age')}
                />
            </View>
            <View style={[styles.inputView , { marginBottom : 20 }]}>
                <Text>Address</Text>
                <TextInput 
                    multiline={true}
                    style ={[styles.input , {height:80, textAlignVertical: 'top'}]}
                    value={userDetails.address}
                    onChangeText={(address) => handleInput(address , 'address')}
                />
            </View>
            <Button title="Submit" onPress={saveForm} />
        </View>
    )
}


const styles = StyleSheet.create({
    inputView : {
        marginTop:5
    },
    input : {
        paddingVertical : 3,
        paddingHorizontal : 6,
        borderColor : 'black',
        borderWidth : 0.5
    }
})

export default AddUser