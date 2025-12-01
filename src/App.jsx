import { useState } from 'react'
import './App.css'
import CardGrid from './components/CardGrid'
import FormInputArticoli from './components/FormInputArticoli'

const articoliIniziali = [
  { title: "Reteeeeeeeee", content: "Un incredibile Goal Di Zarfati Regala La Vittoria Alla Sua Squadra", id: 1 },
  { title: "E' Un Uomo?Un Aereo?Un Uccello?", content: "Il Racconto Emozionante Di Quando Sono Caduto Facendo Parkour", id: 2 },
  { title: "Uomo Muore e Poi Risorge Il Giorno Seguente", content: "A Rega, TRANQUILLI!, stavo a fa un pisolino...", id: 3 },
]

function App() {
  const [articoli, setArticoli] = useState(articoliIniziali)

  const removeArticolo = (index) => {
    setArticoli(articoli.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className="container titolo"><h1>Narcisistarticoli</h1></div>
      <div className="container">
        <FormInputArticoli articoli={articoli} setArticoli={setArticoli} />
        <CardGrid articoli={articoli} removeArticolo={removeArticolo} />
      </div>
    </>
  )
}

export default App
