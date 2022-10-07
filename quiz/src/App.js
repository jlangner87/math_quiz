import './App.css'
import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddSubtract from './AddSubtract'
import AddSubtract2 from './AddSubtract2'
import Multiplication from './Multiplication'
import Multiplication2 from './Multiply2'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add_subtract_1" element={<AddSubtract />} />
        <Route path="add_subtract_2" element={<AddSubtract2 />} />
        <Route path="multiply_1" element={<Multiplication />} />
        <Route path="multiply_2" element={<Multiplication2 />} />
      </Routes>
    </div>
  )
}

export default App
