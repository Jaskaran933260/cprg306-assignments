"use client";

import { useState } from "react";

export default function NewItem() {
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
        const item = { name, quantity, category };
        console.log("New Item:", item);
        alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-400 text-center p-4 sqaure-lg shadow-md max-w-md mx-auto">
            <div className="mb-6 p-2 bg-white rounded">
                <label className="block font-semibold"></label>
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
                    <label className="block font-semibold"></label>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">{quantity}</span>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={decrement}
                                disabled={quantity === 1}
                                className={`rounded px-2.5 py-1 text-white ${quantity === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-red-950 hover:bg-red-800"}`}
                            >
                                -
                            </button>
                            <button
                                type="button"
                                onClick={increment}
                                disabled={quantity === 99}
                                className={`rounded px-2 py-1 text-white ${quantity === 99 ? "bg-gray-500 cursor-not-allowed" : "bg-red-950 hover:bg-red-800"}`}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 p-1">
                    <label className="block font-semibold"></label>
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

            <button type="submit" className="w-full bg-red-950 text-white p-2 rounded hover:bg-red-800">
                +
            </button>
        </form>
    );
}
