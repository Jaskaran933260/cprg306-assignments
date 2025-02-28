import Item from "./item.js";
import { useState } from "react";

export default function ItemList() {


    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </div>
    );
}
