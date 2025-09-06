import { useState } from 'react';
import './App.css'

function App() {
  
  // let counter = 5;
  let [counter , setCounter] = useState(0)

  const addValue = ()=> {
      if(counter < 20) setCounter(counter+1);
      // console.log(Math.random());
  }

  const removeValue = ()=>{
    if(counter > 0) setCounter(counter-1);
  }

  const square = ()=>{
    counter = counter**2;
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      <br/>
      <br/>
      <button onClick={square}>Square</button>


    </>
  )
}

export default App
