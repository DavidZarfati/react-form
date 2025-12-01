import { useState } from 'react'
import './App.css'
import CardGrid from './components/CardGrid'
import FormInputArticoli from './components/FormInputArticoli'

const articoli = [
  { title: "mucche alla riscossa1", content: "Yodel-Adle-Eedle-Idle-Oo", id: 1 },
  { title: "mucche alla riscossa2", content: "Yodel-Adle-Eedle-Idle-Oo", id: 2 },
  { title: "mucche alla riscossa3", content: "Yodel-Adle-Eedle-Idle-Oo", id: 3 },
]

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <FormInputArticoli articoli={articoli} />
        {/* <CardGrid articoli={articoli} /> */}
      </div>
    </>
  )
}

export default App
