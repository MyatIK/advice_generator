import divider_desktop from './assets/images/pattern-divider-desktop.svg'
import dice from './assets/images/icon-dice.svg'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const[advices,setAdvices]=useState([{
    id: '',
    textAdvice: ''
  }]);
  
  const handleClick = async () => {
    try {
      const data = await (await fetch("https://api.adviceslip.com/advice")).json()
      setAdvices({id: data.slip.id, textAdvice: data.slip.advice})
    } catch (err) {
        console.log(err.message)
    }
  }


  

  return (
    <>
    <div class="h-screen bg-slate-900 flex items-center justify-center"> 
      <div class="bg-slate-600 w-5/6 xl:w-1/3 rounded-md z-2">
        <p class="text-green-500 text-sm text-center p-2 mt-6">ADVICE #{advices.id}</p>
        <p class="text-white font-bold text-xl p-5 text-center">"{advices.textAdvice}"</p>
        <img class="mt-2 mb-5 mx-auto" src={divider_desktop} alt="divier for advice"/>
        <div class="flex items-center justify-center">
        <button onClick={handleClick} class="rounded-full bg-green-500 w-12 h-12 flex items-center justify-center"><img src={dice} alt="dice button for clicking"/></button>
        </div>
        

        
      </div>
    </div>
    
      
    </>
  )
}

export default App
