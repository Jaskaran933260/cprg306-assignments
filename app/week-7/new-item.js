"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const increment = () => {
        setQuantity((prev) => (prev < 99 ? prev + 1 : 99));
    };

    const decrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate a random ID for the item
        const id = Math.random().toString(36).substring(2, 9);
        const item = { id, name, quantity, category };

        // Call onAddItem prop function, passing the new item
        onAddItem(item);

        // Reset the form fields
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-900 text-center p-4 square-lg shadow-md max-w-md mx-auto ml-0 mb-10">
            <div className="mb-6 p-2 bg-white rounded">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Item Name"
                    className="w-full p-2"
                />
            </div>

            <div className="mb-8 flex justify-between gap-20">
                <div className="w-1/2 p-2 bg-white rounded">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">{quantity}</span>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={decrement}
                                disabled={quantity === 1}
                                className={`rounded px-2.5 py-1 text-white ${quantity === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-500"}`}
                            >
                                -
                            </button>
                            <button
                                type="button"
                                onClick={increment}
                                disabled={quantity === 99}
                                className={`rounded px-2 py-1 text-white ${quantity === 99 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-500"}`}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 p-1">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"].map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                +
            </button>
        </form>
    );
}
