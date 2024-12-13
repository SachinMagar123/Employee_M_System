import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './nav-bar/nav.jsx'
import Add from './Add.jsx'
import Table from './table/table.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <Add/>
      <Table/>
      <h1>ke xa</h1>
    </>
  )
}

export default App
