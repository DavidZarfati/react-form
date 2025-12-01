export default function Card({ title, content, id, index, removeArticolo }) {
    return (
        <li>
            <div className='card'>
                <div className="card-sinistra">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div className="card-destra">
                    <button onClick={() => removeArticolo(index)}>Rimuovi</button>
                </div>
            </div>
        </li >
    )
}