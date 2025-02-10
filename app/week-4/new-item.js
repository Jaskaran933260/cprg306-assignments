"use client";

import { useState } from "react";

export default function Quantity() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1 < 20 ? quantity + 1 : 20);
    };

    const decrement = () => {
        setQuantity(quantity - 1 > 0 ? quantity - 1 : 1);
    };

    return (
        <div className="flex justify-center items-start h-screen">
            <div className="bg-gray-400 text-center w-60 rounded pb-2 p-2">
                <p>Quantity: {quantity}</p>
                <div className="flex justify-center gap-2 mt-2">
                    <button
                        onClick={increment}
                        disabled={quantity === 20}
                        className={`rounded px-4 py-1 text-white 
                            ${quantity === 20 ? "bg-gray-500 cursor-not-allowed" : "bg-red-950 hover:bg-red-800"}`}
                    >
                        Increment
                    </button>
                    <button
                        onClick={decrement}
                        disabled={quantity === 1}
                        className={`rounded px-4 py-1 text-white 
                            ${quantity === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-red-950 hover:bg-red-800"}`}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
}
