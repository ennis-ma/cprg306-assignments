"use client";

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week10");
    }
  }, [user, router]);

  useEffect(() => {
    const fetchItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    };
    fetchItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    const newItemId = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, { ...newItem, id: newItemId }]);
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
