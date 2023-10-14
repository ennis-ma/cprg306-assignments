import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
