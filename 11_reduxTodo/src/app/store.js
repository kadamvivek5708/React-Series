import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Slice/todoSlices'

export const store = configureStore({
    reducer : todoReducer
})