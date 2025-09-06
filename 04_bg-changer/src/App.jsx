import { useState } from "react"

function App() {
  const [ color ,setColor] = useState("grey")

  function setAllcolor(color){
    setColor(color)
  }

  return (
    <>
      <div className="w-full h-screen  duration-200 centre"
      style={{backgroundColor:color}}>
        <h1>Hello Doston</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-02">
        <div className="fixed flex flex-wrap shadow-lg gap-3 bg-emerald-50 rounded-3xl px-3 py-2">
          <button onClick={() => setAllcolor("white")} className="outline-none bg-white px-4 rounded-3xl shadow-lg" >White</button>
          <button onClick={() => setAllcolor("blue")} className="outline-none bg-blue-600 rounded-3xl p-1 px-4 shadow-lg " >Blue</button>
        <button onClick={() => setAllcolor("green")} className="outline-none bg-green-400 rounded-3xl p-1 px-4 shadow-lg" >Green</button>
        <button onClick={() => setAllcolor("yellow")} className="outline-none bg-yellow-400 rounded-3xl p-1 px-4 shadow-lg" >Yellow</button>
        <button onClick={() => setAllcolor("pink")} className="outline-none bg-pink-400 rounded-3xl p-1 px-4 shadow-lg" >Pink</button>
        <button onClick={() => setAllcolor("red")} className=" outline-none bg-red-500 rounded-3xl p-1 px-4 shadow-lg" >Red</button>
        
        </div>
      </div>
    </>
  )
}

export default App
