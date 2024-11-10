import React from "react";
import { Link } from "react-router-dom";
import remove from "../../assets/remove.png";

const CartCard = ({ gadget }) => {
  const { product_image, product_title, price, product_id, specification } =
    gadget;
  return (
    <div className="bg-violet-200 shadow-xl p-3 flex flex-row items-center w-9/12 mx-auto rounded-xl mt-3 gap-4">
      <img
        className="h-[124px] w-[200px] object-cover rounded-xl"
        src={product_image}
        alt="product_image"
      />

      <div className="items-start flex-1">
        <div className="flex flex-row justify-between w-full">
          <h2 className="card-title text-black">{product_title}</h2>
          <Link to={`/gadgets/${product_id}`}>
            <img className="w-6 h-6 rounded-full" src={remove} alt="Remove" />
          </Link>
        </div>
        <p className="text-black">{specification}</p>
        <h3 className="text-black text-xl font-semibold">Price: ${price}</h3>
      </div>
    </div>
  );
};

export default CartCard;
