import { createSlice } from "@reduxjs/toolkit";

const BackEndReducer = createSlice({
    name:"BackEndReducer",
    initialState:{
        datafile: []
    },
    reducers:{
        addData: (state ,{payload})=>{
            state.datafile = payload
        }
    },
})
export const {addData} = BackEndReducer.actions

export default BackEndReducer.reducer