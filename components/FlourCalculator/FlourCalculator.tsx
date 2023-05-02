"use client";

import { useFlourCalculator } from "./useFlourCalculator";

export const FlourCalculator = () => {
  const { handleFlourChange, selfRaisingFlour, plainFlour, bakingSoda } =
    useFlourCalculator();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Self raising flour calculator
      </h1>
      <label htmlFor="flour">Recipe calls for:</label>

      <div className="flex space-x-2">
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            name="flour"
            id="flour"
            value={selfRaisingFlour}
            onChange={handleFlourChange}
            className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
            g
          </span>
        </div>
        <span>of self raising flour</span>
      </div>
      <div>
        <p>Use {plainFlour}g of flour</p>
        <p>Use {bakingSoda}g of baking soda</p>
      </div>
    </div>
  );
};
