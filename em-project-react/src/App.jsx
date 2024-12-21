import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/nav.jsx'
import AddButton from './AddButton.jsx'
import Table from './components/table.jsx'
import AddEmployee from './components/Addemployee.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>

      <NavBar/>
      <AddButton/>

      <Routes>
        <Route path="/" element={<Table/>} />
        <Route path="/addemployee" element={<AddEmployee/>} />
      </Routes>
    </Router>      
    </>
  )
}

export default App
