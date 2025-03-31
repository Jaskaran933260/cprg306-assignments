export default function Item({ name, quantity, category, onSelect }) {
    return (
        <section
            className="bg-slate-900 text-white m-2 p-2 max-w-xs cursor-pointer hover:bg-slate-800 transition-all"
            onClick={() => onSelect(name)}
        >
            <h2 className="font-bold text-xl">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </section>
    );
}
