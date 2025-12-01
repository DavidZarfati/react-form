export default function Card({ title, content, id, index, removeArticolo, modificaArticolo }) {
    return (
        <li>
            <div className='card'>
                <div className="card-sinistra">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div className="card-destra">
                    <button onClick={() => modificaArticolo(index)}>Modifica</button>
                    <button onClick={() => removeArticolo(index)}>Rimuovi</button>
                </div>
            </div>
        </li >
    )
}