import { useState } from 'react'
import './App.css'
import BearCounter from './components/BearCounter'
import Controls from './components/Controls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BearCounter/>
      <Controls/>
    </>
  )
}

export default App
