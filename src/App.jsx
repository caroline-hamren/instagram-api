import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Instagram feed tester</h1>
      <Data />
    </>
  )
}

export default App
