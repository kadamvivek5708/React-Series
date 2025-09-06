import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState =  {
    todos : [ {id:1 , text:'Hello'}]
}

export const todoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo : (state,action) => {
            const todo = {
                id:nanoid() ,
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            // const removetodo =  action.payload.id
            // state.todos.pop(removetodo)   <--- Wrong

            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo : (state,action) => {
            const upTodo = {
                text: action.payload
            }
            state.todos = state.todos.map((todo) => if(todo.id === action.payload) state.todos.push(todo) )
        }
    }
})