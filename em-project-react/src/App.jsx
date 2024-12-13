import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/nav.jsx'
import Add from './Add.jsx'
import Table from './components/table.jsx'
import AddEmployee from './components/Addemployee.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <Add/>
      <Table/>
      <AddEmployee/>
      <h1>ke xa</h1>
    </>
  )
}

export default App
