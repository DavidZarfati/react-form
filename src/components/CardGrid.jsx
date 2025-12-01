import Card from "./Card";

export default function CardGrid({ articoli }) {
    return (
        <>
            <ul>
                {articoli.map((articolo, index) => (
                    <Card key={index} {...articolo} />
                ))}
            </ul>
        </>
    );
}