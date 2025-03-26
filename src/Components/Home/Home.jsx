import React from 'react'

const Home = ({toggle}) => {
  return (
   <>
   <div className=' flex items-center h-screen w-full '>
   <div className='flex justify-center items-center w-full gap-50'>
    <div>
        <img src="\src\Images\dices.png" alt="diceimage" />
    </div>
    <div className='flex flex-col items-end gap-2'>
        <h1 className='text-8xl font-bold'>DICE GAME</h1>
        <button onClick={toggle} className='bg-black text-white px-20 py-3 rounded font-bold text-center  hover:bg-green-500' >Play Now</button>
    </div>
   </div>
   </div>
  
   </>
  )
}

export default Home