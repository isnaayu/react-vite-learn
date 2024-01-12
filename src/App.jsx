import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Parent from './components/Parent'
import Child from './components/Child'
import Form from './components/Form'

function App() {

  return (
    <>
      <Header/>
      <Home />
      <Form/>
      {/* <Home name='Isna Ayu Muarofah' title="Welcome"/> */}
      {/* <Home name='Isna Ayu' address="Ragunan" age="22"/> */}
      {/* <Parent name="Andi" address="Ragunan" age="23"/> */}
      {/* <Child name="Isna" address="Ragunan" age="23"/> */}


    </>
  )
}

export default App
