import React from "react";  // Ensure React is imported
import Item from "./item.js";

export default function ItemList({ items }) {  // Accept items as a prop
    // Since all previous operations that might have altered 'items' directly need to be immutable,
    // any such functions should be adjusted outside this component and passed in via props if needed.
    // This component now purely renders the passed 'items' prop.

    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <Item key={item.id || index} {...item} />  // Use item.id if available, else fallback to index
            ))}
        </div>
    );
}
