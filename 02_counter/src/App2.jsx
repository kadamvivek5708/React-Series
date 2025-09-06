import { useState, useEffect, useRef } from "react";
import './App.css'


function App2(){
    const useref = useRef(null);
    let [count , setCount] = useState(0);
    
    function increment(){
        
        useref.current = setInterval(()=>setCount(prev => prev + 1),1000);
        // console.log(count)
    }
    function decrement(){
        useref.current = setInterval(()=>setCount(prev => prev - 1),1000)
        // console.log(count)
    }
    function stop(){
        clearInterval(useref.current);
        // console.log(count)
    }
    function reset(){
       setCount(0)
    }

    return(
        <>
        <h2>Counter : {count}</h2>
        <button onClick={increment}>Increment</button>
        <br/>
        <br/>
        <button onClick={stop}>Stop</button>
        <br/>
        <br/>
        <button onClick={decrement}>Decrement</button>
        <br/>
        <br/>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default App2 