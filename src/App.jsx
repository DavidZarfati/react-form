import { useState } from 'react'
import './App.css'
import CardGrid from '../components/CardGrid'

const articoli = [
  { title: "mucche alla riscossa", content: "Yodel-Adle-Eedle-Idle-Oo", id: 1 },
  { title: "mucche alla riscossa", content: "Yodel-Adle-Eedle-Idle-Oo", id: 2 },
  { title: "mucche alla riscossa", content: "Yodel-Adle-Eedle-Idle-Oo", id: 3 },
]

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CardGrid articoli={articoli} />
    </>
  )
}

export default App
