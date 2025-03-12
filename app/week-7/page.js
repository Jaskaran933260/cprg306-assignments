"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Page() {
    const [sortBy, setSortBy] = useState("name");
    const [items, setItems] = useState(itemsData);  // State variable for items

    // Function to add new item to the list
    const handleAddItem = newItem => {
        setItems(currentItems => [...currentItems, newItem]);
    };

    // Sort or group items based on 'sortBy' state
    let displayItems = [...items];
    if (sortBy === "name") {
        displayItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        displayItems.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "grouped") {
        displayItems = displayItems.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});
    }

    return (
        <main className="bg-slate-950 p-4 min-h-screen">
            <h1 className="text-white text-3xl font-bold mb-4">Shopping List</h1>

            {/* Component for adding a new item */}
            <NewItem onAddItem={handleAddItem} />

            {/* Sort and Group Buttons */}
            <div className="flex gap-2 mb-4">
                <p className="text-white">Sort by:</p>
                <button
                    className={`px-4 py-2 text-white rounded ${sortBy === "name" ? "bg-blue-500" : "bg-gray-700"}`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 text-white rounded ${sortBy === "category" ? "bg-blue-500" : "bg-gray-700"}`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
                <button
                    className={`px-4 py-2 text-white rounded ${sortBy === "grouped" ? "bg-blue-500" : "bg-gray-700"}`}
                    onClick={() => setSortBy("grouped")}
                >
                    Group by Category
                </button>
            </div>

            {sortBy === "grouped" ? (
                Object.keys(displayItems).sort().map(category => (
                    <div key={category} className="mb-4">
                        <h2 className="text-xl font-bold text-white capitalize mb-2">{category}</h2>
                        {displayItems[category].map(item => (
                            <li key={item.id} className="flex items-center bg-slate-900 text-white m-2 p-2 max-w-sm">
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold text-white">{item.name}</h2>
                                    <p className="text-sm text-white">Buy {item.quantity} in {item.category}</p>
                                </div>
                            </li>
                        ))}
                    </div>
                ))
            ) : (
                <ItemList items={displayItems} />
            )}
        </main>
    );
}
