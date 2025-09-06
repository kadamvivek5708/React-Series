import { useState,useCallback,useEffect,useRef } from "react"
function App() {
  const [len , setLen] = useState(8)
  const [isSymb , setIsSymb] = useState(false)
  const [isNumber , setIsNumber] = useState(false)
  const [pass , setPass] = useState()

  const passwordGenerotor = useCallback(()=>{
    let passs =  "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz";

    if(isNumber) str += "0123456789";
    if(isSymb) str += "!@#$%^&*(){}";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length);
      passs += str[char];
    }
    setPass(passs)

  } , [len , isSymb , isNumber , setPass])

  const refPass = useRef(null)

  const copyPassToClip = useCallback(()=>{
    refPass.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass])

  useEffect(()=>{passwordGenerotor()},[len , isSymb , isNumber , passwordGenerotor])

  return (
    <>
      <h1 className="text-4xl text-center py-2 bg-amber-50 text-black ">Password Generator</h1>
      <br/>

      <div className=" w-full max-w-md mx-auto shadow-lg rounded-lg py-8 text-black bg-amber-200">
        <div className="flex rounded-2xl overflow-hidden p-4 mb-4"> 
          <input 
          type="text" 
          value={pass} 
          className="outline-none w-full bg-white py-2 shadow-lg px-4 " 
          placeholder="password" 
          readOnly
          ref={refPass}
          />
          <button 
          className="bg-blue-900 outline-none px-3 py-0.5 shrink-0 text-amber-50 " 
          
          onClick={copyPassToClip}
          >copy</button>
          
        </div>
        <div className="flex text-sm gap-x-2 px-4">
          <div className="flex items-center gap-x-2  text-black w-55">
            <input
            type="range"
            min={8}
            max={25}
            value={len}
            className="cursor-pointer"
            onChange={(e)=>{setLen(e.target.value)}}
            />
            <label>Length : {len}</label>
          </div>
          <div className="flex items-center gap-x-1  text-black px-4 ">
            <input 
            type="checkbox"
            id="numberInput"
            value={isNumber}
            onChange={()=>{setIsNumber(prev => !prev);}}

            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1  text-black ">
            <input 
            type="checkbox"
            id="symbolInput"
            value={isSymb}
            onChange={()=>{setIsSymb(prev => !prev);}}

            />
            <label>Symbols</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
