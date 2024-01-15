import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Parent from './components/Parent'
import Child from './components/Child'
import Form from './components/Form'
import TodoList from './components/TodoList'
import AppTodo from './AppTodo'
import { Routes ,Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import SimpleComponent from './components/SimpleComponent'
import HelloHoc from './components/HelloHoc'
import styling from './components/hoc/HeigherComp'
import WrapperComp from './components/hoc/WrapperComp'
import WithCounter from './components/counter/WithCounter'
import ClickCounter from './components/counter/ClickCounter'
import HoverCounter from './components/counter/HoverCounter'
import Counter from './components/redux/Counter'

function App(){
  const StyleComponent1 = styling(WrapperComp, {color:'blue', fontSize:'40px'})
  const StyleComponent2 = styling(WrapperComp, {color:'red', fontSize:'40px'})
  const ClickCounterWithCount = WithCounter(ClickCounter)
  const HoverCounterWithCount = WithCounter(HoverCounter)

  const AllCount = () =>{
    return(
      <>
      <ClickCounterWithCount/>
      <HoverCounterWithCount/>
      </>
    )
  }
    return (
      <>
      {/* <Header/> */}
       {/* <Home /> */}
       {/* <AppTodo/> */}
       
      <BrowserRouter>
          <Nav/>
        <Routes>
          {/* <Route path='/' element={<Nav/>} /> */}
          <Route path='/parent' element={<Parent/>} />
          <Route path='/showName' element={<Form/>} />
          <Route path='/todo' element={<AppTodo/>} />
          <Route path='/hoc' element={<HelloHoc/>} />
          <Route path='/styling' element={<StyleComponent1/>} />
          <Route path='/styling2' element={<StyleComponent2/>} />
          <Route path='/counter' element={<AllCount/>} />
          <Route path='/counter2' element={<Counter/>} />
          
        </Routes>
      </BrowserRouter>
        {/* <Header/>
        <Home />
        <AppTodo/> */}
  
  
      </>
    )
  
}

export default App


