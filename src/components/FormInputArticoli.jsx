
import { useState } from 'react';
import Card from './Card';

export default function FormInputArticoli({ articoli: articoliIniziali = [] }) {
    const [newArticolo, setNewArticolo] = useState('');
    const [newContent, setNewContent] = useState('');
    const [articoli, setArticoli] = useState(articoliIniziali);
    function submitHandler(event) {
        event.preventDefault();
        if (newArticolo.trim()) {
            console.log('SUBMIT: ', newArticolo, newContent);
            setArticoli([...articoli, { title: newArticolo, content: newContent, id: Date.now() }]);
            setNewArticolo('');
            setNewContent('');
        }
    }
    function removeArticolo(indexToRemove) {
        console.log(`Voglio rimuovere l'elemento di indice ${indexToRemove}`);

        // Con un for normale
        const newArticoliWithout = [];
        for (let i = 0; i < articoli.length; i++) {
            if (i !== indexToRemove) {
                newArticoliWithout.push(articoli[i]);
            }
        }
        setArticoli(newArticoliWithout);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Titolo" value={newArticolo}
                    onChange={(event) => {
                        setNewArticolo(event.target.value)
                    }} />
                <input type="text" placeholder="Contenuto" value={newContent}
                    onChange={(event) => {
                        setNewContent(event.target.value)
                    }} />
                <button type="submit">Aggiungi Nuovo Articolo</button>
            </form>
            <ul className='lista-card'>
                {articoli.map((articolo, index) => (
                    <li key={index}>
                        <div className='card' key={index}>
                            <div className="card-sinistra">
                                <h2>{articolo.title}</h2>
                                <p>{articolo.content}</p>
                            </div>
                            <div className="card-destra">
                                <button onClick={() => {
                                    removeArticolo(index);
                                }}>Rimuovi</button>
                            </div>
                        </div>
                    </li >
                ))
                }
            </ul >
        </>
    )
}