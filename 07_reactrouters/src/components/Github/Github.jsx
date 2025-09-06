import React, { useEffect, useState } from "react";

function Github(){
    const [data ,setData] = useState({});

    useEffect(()=>{
        fetch("https://api.github.com/users/kadamvivek5708")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)})
    },[])
    return(
        <div className="bg-blue-950 text-center text-amber-50 m-4 p-4 text-4xl">
            Login Name : {data.login}
            <br/><br/><br/>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git Avatar" width={300}/>~
        </div>
    )
}

export default Github