"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (!ingredient) return;

        async function fetchMealIdeas(ingredient) {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                console.error("Error fetching meal ideas:", error);
                setMeals([]);
            }
        }

        fetchMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div className="bg-slate-900 text-white p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-2">Meal Ideas for {ingredient}</h2>
            {meals.length > 0 ? (
                <ul className="space-y-2">
                    {meals.map(meal => (
                        <li key={meal.idMeal} className="flex items-center space-x-4 bg-gray-800 p-2 rounded cursor-pointer hover:bg-gray-700 transition-all">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded" />
                            <span className="font-semibold">{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-400">No meal ideas found.</p>
            )}
        </div>
    );
}
