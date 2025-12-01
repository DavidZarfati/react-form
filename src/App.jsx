import { useState } from 'react'
import './App.css'
import CardGrid from '../components/CardGrid'

const articoli = [
  { title: "mucche alla riscossa", content: "Yodel-Adle-Eedle-Idle-Oo" },
  { title: "mucche alla riscossa", content: "Yodel-Adle-Eedle-Idle-Oo" },
  { title: "mucche alla riscossa", content: "Yodel-Adle-Eedle-Idle-Oo" },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardGrid articoli={articoli} />
    </>
  )
}

export default App
