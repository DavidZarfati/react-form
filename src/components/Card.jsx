export default function Card({ title, content, id }) {
    return (
        <li key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
        </li>
    )
}