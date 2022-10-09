import { useState } from 'react'
import './App.css'
import ClasComp from './components/ClasComp'
import FunComp from './components/FunComp'

function App() {

  return (
    <div className="App">

      <h1>Function Vs Class Component</h1>
      <FunComp passion="Development"/>
      <ClasComp passion="Development"/>
    </div>
  )
}

export default App
