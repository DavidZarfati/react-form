import Card from "./Card";

export default function CardGrid({ articoli }) {
    return (
        <>
            {articoli.map((articolo, index) => (
                <Card key={index} {...articolo} />
            ))}
        </>
    );
}