import Card from "./Card";

export default function CardGrid({ articoli, removeArticolo, modificaArticolo }) {
    return (
        <>
            <ul>
                {articoli.map((articolo, index) => (
                    <Card key={index} {...articolo} index={index} removeArticolo={removeArticolo} modificaArticolo={modificaArticolo} />
                ))}
            </ul>
        </>
    );
}