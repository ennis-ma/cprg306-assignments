"use client";

import { useState } from "react";
import Item from "./item";

import itemsData from "./items";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  let displayItems = [...itemsData];

  if (sortBy === "name") {
    displayItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    displayItems.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "groupedByCategory") {
    const grouped = displayItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    const sortedCategories = Object.keys(grouped)
      .sort()
      .reduce((acc, key) => {
        acc[key] = grouped[key].sort((a, b) => a.name.localeCompare(b.name));
        return acc;
      }, {});

    displayItems = sortedCategories;
  }

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`mr-2 px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("groupedByCategory")}
          className={`px-4 py-2 rounded ${
            sortBy === "groupedByCategory"
              ? "bg-blue-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Group by Category
        </button>
      </div>
      <ul className="space-y-4 mt-4">
        {sortBy === "groupedByCategory"
          ? Object.keys(displayItems).map((category) => (
              <li key={category} className="capitalize">
                <strong>{category}</strong>
                <ul className="ml-4">
                  {displayItems[category].map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </li>
            ))
          : displayItems.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default ItemList;
