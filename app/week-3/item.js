export default function Item({ name, quantity, category }) {
    return (
        <section className="bg-slate-900 text-white m-2 p-2  max-w-xs">
            <h2 className="font-bold text-xl">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </section>
    );
}