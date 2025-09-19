import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme : "light"
}

const themeSlice = createSlice({
    name:"themechange",
    initialState,
    reducers:{
        toggleLight:(state,action) => {
            state.theme = "light"
        },
        toggleDark:(state,action) => {
            state.theme = "dark"
        }
    }
})

export default themeSlice.reducer;

export const{toggleLight,toggleDark} = themeSlice.actions