import React
, { useState } from 'react'

const GamePage = () => {
    const arr= [1,2,3,4,5,6];
    const [selectedNumber , setSelectedNumber] = useState();
    console.log(selectedNumber)
    const [selectimg , setSelectImg] = useState(1);
    const random = ()=>{
       return Math.floor(Math.random()*6 + 1);
    }
    const rollDice = ()=>{
      setSelectImg(random())
    }
  return (
   <>
   <div className='w-full h-full flex  flex-col gap-30 justify-center items-center'>
   <nav className='w-[85%] flex justify-between text-center h-[30%]'>
    <div>
        <h1 className='text-8xl' >0</h1>
        <h1 className='text-4xl' >Score</h1>
    </div>
    <div className='flex flex-col items-end  justify-center'>
    <ul className='flex gap-4 text-center justify-center items-center '>
    {arr.map((value, i) => (
                <li
                  key={i}
                  onClick={()=>setSelectedNumber(value) }
                  className={`flex border-4 h-[70px] w-[70px] items-center justify-center text-4xl ${ selectedNumber === value? "bg-black text-white border-4 border-black":"bg-white text-black"}`}
                >
                  {value}
                </li>
              ))}
    </ul>
    <h2 className='text-2xl' >select number </h2>
    </div>
   </nav>
   <div className='flex flex-col gap-2 items-center '>
    <img  onClick={rollDice} className='cursor-pointer' src={`src/Images/dice_${selectimg}.png`} alt="png" />
    <h1 className='text-2xl '>click on the dice to roll</h1>
   </div>
   <div>
    <button onClick={()=>alert("if the number in the dice and the number you select are same your score will be updated")} className='border bg-black text-white px-10 py-3'>Game Rules</button>
    <button></button>
   </div>
   </div>
   
   </>
  )
}

export default GamePage