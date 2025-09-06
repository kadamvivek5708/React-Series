import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  

  return (
    <UserContextProvider>
      <div className="text-5xl bg-cyan-400 p-4 m-4 text-center bg">Now we are going to learn API context</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
