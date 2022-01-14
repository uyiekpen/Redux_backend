import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
}

const MainGlobal = createSlice({
    name: "MainGlobal",
    initialState,
    reducers: {
        add : (state) =>{
            state.value +=1
        },
        sub : (state) => {
            state.value-=1
        },
    }
});

export const {
    add,
    sub,
} = MainGlobal.actions
export default MainGlobal.reducer