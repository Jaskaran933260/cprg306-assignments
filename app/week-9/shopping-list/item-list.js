import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <Item key={item.id || index} {...item} onSelect={onItemSelect} />
            ))}
        </div>
    );
}
