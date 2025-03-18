import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", Counter);
    // Counter= Counter + 1

    setCounter(Counter +1)
    
  }

  const removeValue = () => {
    setCounter(Counter -1) 
  }

  return (
    <>
      <h1> Atish React </h1>
      <h2>Counter value : {Counter}</h2>
      <button 
      onClick={addValue}
      >Add value {Counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {Counter}</button>
    </>
  )
}

export default App
