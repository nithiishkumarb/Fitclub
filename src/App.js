import React from 'react'
import Hero from "./components/Hero/Hero.jsx"
import Programs from './components/Programs/Programs.jsx'
import Reasons from './components/Reasons/Reasons.jsx'
import "./App.css"
const App = () => {
  return (
    <div className='App'>
      <Hero/>
      <Programs/>
      <Reasons/>
    </div>
  )
}

export default App