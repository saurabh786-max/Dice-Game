import GameContext from "./GameContext";
import { useState, useContext} from "react";

const GameContextProvider = ({children}) =>{
    const [selectedNumber , setSelectedNumber] = useState();
    const [selectimg , setSelectImg] = useState(1);
    const [score ,setScore] = useState(0);
    const [error, seterror] = useState("")
    return(
            <GameContext.Provider value={{error,seterror,setSelectImg,selectedNumber,setSelectedNumber,selectimg,score, setScore}}>
                {children}
            </GameContext.Provider>
    )
}
export default GameContextProvider;