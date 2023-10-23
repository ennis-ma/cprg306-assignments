"use client";

import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-slate-50 p-4 border border-gray-200 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-semibold text-gray-800">{name}</span>
        <span className="text-gray-500 px-2 py-1 rounded bg-gray-100">
          Qty: {quantity}
        </span>
      </div>
      <div className="text-sm mt-1">
        <span className="text-gray-400">{category}</span>
      </div>
    </li>
  );
};

export default Item;
