import './App.css'
import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddSubtract from './AddSubtract'
import AddSubtract2 from './AddSubtract2'
import Multiplication from './Multiplication'
import Multiplication1 from './multiply1'
import Multiplication2 from './Multiply2'
import Multiplication3 from './multiply3'
import Multiplication4 from './multiply4'
import Multiplication5 from './multiply5'
import Multiplication6 from './multiply6'
import Multiplication7 from './multiply7'
import Multiplication8 from './multiply8'
import Multiplication9 from './multiply9'
import Multiplication10 from './multiply10'
import Multiplication11 from './multiply11'
import Multiples2 from './multiples2'
import Multiples3 from './multiples3'
import Multiples5 from './multiples5'
import Multiples10 from './multiples10'
import NegativeSubtract from './subtract_negative'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add_subtract_1" element={<AddSubtract />} />
        <Route path="add_subtract_2" element={<AddSubtract2 />} />
        <Route path="subtract_neg" element={<NegativeSubtract />} />
        <Route path="multiply_all" element={<Multiplication />} />
        <Route path="multiply_1" element={<Multiplication1 />} />
        <Route path="multiply_2" element={<Multiplication2 />} />
        <Route path="multiply_3" element={<Multiplication3 />} />
        <Route path="multiply_4" element={<Multiplication4 />} />
        <Route path="multiply_5" element={<Multiplication5 />} />
        <Route path="multiply_6" element={<Multiplication6 />} />
        <Route path="multiply_7" element={<Multiplication7 />} />
        <Route path="multiply_8" element={<Multiplication8 />} />
        <Route path="multiply_9" element={<Multiplication9 />} />
        <Route path="multiply_10" element={<Multiplication10 />} />
        <Route path="multiply_11" element={<Multiplication11 />} />
        <Route path="multiply_multiples_2" element={<Multiples2 />} />
        <Route path="multiply_multiples_3" element={<Multiples3 />} />
        <Route path="multiply_multiples_5" element={<Multiples5 />} />
        <Route path="multiply_multiples_10" element={<Multiples10 />} />
      </Routes>
    </div>
  )
}

export default App
