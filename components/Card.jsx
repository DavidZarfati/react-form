export default function Card({ title, content, id }) {
    return (
        <li>
            <div key={id}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </li>
    )
}