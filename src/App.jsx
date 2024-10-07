import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import Bar from './components/Bar'
import {Route, Routes} from 'react-router-dom'



function App() {
  
  

  return (
    <>
    <Bar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add props={{title:'Mens Cotton Jacket',price:' $55.99',rate:4.7}}/>}></Route>
    </Routes>
    </>
  )
}

export default App
