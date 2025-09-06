import React,{useContext} from "react";
import UserContext from "../context/UserContext"


function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return <div>Please login</div>
    return(
        <>
        <h1 className="flex justify-center px-4 text-2xl m-20 p-5 bg-gray-300">Username : {user}</h1>
        </>
    )
}

export default Profile;