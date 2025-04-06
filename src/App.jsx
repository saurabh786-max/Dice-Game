import { useState } from "react"
import Home from "./Components/Home/Home"
import GamePage from "./Components/GamePage/GamePage";
import GameContextProvider from "./context/GameContextProvider";


function App() {
  const [istoggled, setIsToggled] = useState(false);

  const toggle = ()=>{
    setIsToggled((prev) => !prev)
  }
  return (
  <GameContextProvider>
    {istoggled? <GamePage/>: <Home toggle= {toggle}/>}
  </GameContextProvider>

  )
}

export default App
