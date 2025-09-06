import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4  rounded-xl ' >Tailwind CSS</h1>
      <br/>
      <Card sub="Js" name="Chai aur Code"/>
      <Card sub="React" name="Chai aur Code" />
    </>
  )
}

export default App
