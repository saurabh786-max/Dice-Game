import { useState } from "react"
import Home from "./Components/Home/Home"
import GamePage from "./Components/GamePage/GamePage";


function App() {
  const [istoggled, setIsToggled] = useState(false);

  const toggle = ()=>{
    setIsToggled((prev) => !prev)
  }
  return (
    <>
    {istoggled? <GamePage/>: <Home toggle= {toggle}/>}
    </>
  )
}

export default App
