import ItemList from "./item-list.js";

export default function Page() {
    return (
        <main className="bg-black p-4">
            <h1 className="text-white text-3xl font-bold mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}