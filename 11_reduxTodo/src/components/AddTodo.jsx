import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/Slice/todoSlices'
import { updateTodo } from "../features/Slice/todoSlices";
import Todos from "./Todos";

function AddTodo(){
    const [input, setInput] = useState('')
    const [update , setUpdate] = useState(null);
    const dispatch = useDispatch();

    const editTodo = (todo) => {
        setInput(todo.text);
        setUpdate(todo.id);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (update) {
            dispatch(updateTodo({id:update, text:input}));
            setUpdate(null);
        } else {
            dispatch(addTodo(input));
        } 
        setInput('');
    }


    return (
        <>
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {update ? "Update Todo": "Add Todo" }
            </button>
        </form>
        <Todos onEdit={editTodo}/>
        </>
    )

}
export default AddTodo;
