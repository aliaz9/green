import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toys from './Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <Toys />
     </div>
    </>
  )
}

export default App
