import { useState } from 'react'
import './App.css'
import CardGrid from './components/CardGrid'
import FormInputArticoli from './components/FormInputArticoli'

const articoliIniziali = [
  //   { title: "mucche alla riscossa1", content: "Yodel-Adle-Eedle-Idle-Oo", id: 1 },
  //   { title: "mucche alla riscossa2", content: "Yodel-Adle-Eedle-Idle-Oo", id: 2 },
  //   { title: "mucche alla riscossa3", content: "Yodel-Adle-Eedle-Idle-Oo", id: 3 },
]

function App() {
  const [articoli, setArticoli] = useState(articoliIniziali)

  const removeArticolo = (index) => {
    setArticoli(articoli.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className="container titolo"><h1>I Miei Articoli</h1></div>
      <div className="container">
        <FormInputArticoli articoli={articoli} setArticoli={setArticoli} />
        <CardGrid articoli={articoli} removeArticolo={removeArticolo} />
      </div>
    </>
  )
}

export default App
