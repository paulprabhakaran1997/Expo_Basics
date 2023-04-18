import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage'




const initialState = {
    userList : []
}

const userReducer = createSlice({
    name : 'userReducer',
    initialState,
    reducers : {
        addUser : (state , {type , payload}) =>{
            console.log("Payload = " , payload)
            return {
                ...state,
                userList : payload
            }
        }
    }
});


export const { addUser } = userReducer.actions;

export default userReducer.reducer