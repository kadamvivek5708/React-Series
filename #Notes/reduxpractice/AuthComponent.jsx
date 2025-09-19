import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {login,logout} from './authSlice'

export default function Auth(){
    const status = useSelector((login) => {})
    const dispatch =  useDispatch();
    return(
        <>
        ...
        </>
    )
}