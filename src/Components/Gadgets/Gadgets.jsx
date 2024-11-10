import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const selectCategory =
    selectedCategory === "All Products"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === selectedCategory);

  useEffect(() => {
    fetch("./gadgetData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const getButtonSwitchColor = (category) =>
    category === selectedCategory
      ? "bg-blue-500 text-white"
      : "bg-gray-200 text-gray-700";

  return (
    <div className="w-11/12 mx-auto gap-2 flex flex-row mt-8">
      <div className="w-2/12 h-[296px] gap-2 flex flex-col p-3 mt-12 rounded-xl bg-white">
        <button
          className={`btn p-3 ${getButtonSwitchColor("All Products")}`}
          onClick={() => setSelectedCategory("All Products")}
        >
          All Products
        </button>
        <button
          className={`btn p-3 ${getButtonSwitchColor("Laptops")}`}
          onClick={() => setSelectedCategory("Laptops")}
        >
          Laptops
        </button>
        <button
          className={`btn p-3 ${getButtonSwitchColor("Smartphones")}`}
          onClick={() => setSelectedCategory("Smartphones")}
        >
          Phones
        </button>
        <button
          className={`btn p-3 ${getButtonSwitchColor("Smartwatches")}`}
          onClick={() => setSelectedCategory("Smartwatches")}
        >
          Smart Watches
        </button>
        <button
          className={`btn p-3 ${getButtonSwitchColor("Accessories")}`}
          onClick={() => setSelectedCategory("Accessories")}
        >
          Accessories
        </button>
      </div>
      <div className="w-9/12">
        <h2 className="text-xl font-medium mb-4 text-left">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectCategory.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
