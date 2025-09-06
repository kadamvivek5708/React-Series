import React, { useState ,useContext } from "react";
import UserContext from "../context/UserContext"

function Login() {

    const [username,setUsername] = useState('')
    const [pass,setPass] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{      
        e.preventDefault()
        setUser(username , pass)
    }
    
    return(
        <div className="flex justify-center px-4 text-2xl m-20 p-5 bg-gray-300">
            <h1 className="px-4">Login</h1>
            <input type="text" 
            placeholder="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4"
            />
            <input type="password" 
            placeholder="Password" 
            value={pass} onChange={(e) => 
            setPass(e.target.value)} 
            />
            <br/>
            <button className="px-4 bg-blue-700 rounded-lg" onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Login;  