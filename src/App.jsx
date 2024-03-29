import React from 'react'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Netflix from "./pages/Netflix";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Player from './components/Player';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/player' element={<Player/>} />
        <Route exact path='/' element={<Netflix/>} />
      </Routes>
    </BrowserRouter>
  )
}