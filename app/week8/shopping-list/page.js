"use client";

import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // redirect user to /week8 if they are not logged in
  const router = useRouter();
  if (!user) {
    router.push("/week8");
    return null;
  }

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (itemName) => {
    let cleanedName = itemName.split(",")[0].trim();
    cleanedName = cleanedName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Shopping List</h1>
      <div className="flex justify-between">
        <div>
          <div className="mb-4">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
