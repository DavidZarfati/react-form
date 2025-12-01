
import { useState } from 'react';
import Card from './Card';

export default function FormInputArticoli({ articoli = [], setArticoli }) {
    const [newArticolo, setNewArticolo] = useState('');
    const [newContent, setNewContent] = useState('');
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
        </>
    )
}