import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Name :"",
    Email :"",
}

const InputReducer = createSlice({
    name: "InputReducer",
    initialState,
    reducers: {
        Myname : (state,{payload})=>{
            state.Name = payload
        },
        MyEmail : (state,{payload})=>{
            state.Email = payload
        },
    }
});

export const {
    Myname,
    MyEmail
} = InputReducer.actions
export default InputReducer.reducer