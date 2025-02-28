"use client";

import ItemList from "./items.json";
import { useState } from "react";

export default function Page() {
    const [produce, setProduce] = useState("Produce");
    let items = [...ItemList];

    items.sort((a, b) => a.name.localeCompare(b.name));

    items = items.filter((item) => item.category !== produce);

    const handleClick = () => {
        setProduce("Produce");
    }

    return (
        <main className="bg-black p-4">
            <h1 className="text-white text-3xl font-bold mb-4">Shopping List</h1>
            <ul>
                {ItemList.map((item) => (
                    <li key={item.id} onClick={handleClick(produce)}>
                        <div className="flex items-center bg-slate-900 text-white m-2 p-2 max-w-sm">
                            <div className="ml-4">
                                <h2 className="text-xl font-bold text-white ">{item.name}</h2>
                                <p className="text-sm text-white">Buy {item.quantity} in {item.category}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div>{selectProduce}</div>
        </main>
    );
}