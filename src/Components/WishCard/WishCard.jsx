import React from "react";
import { Link } from "react-router-dom";
import remove from "../../assets/remove.png";
import { addToCartList, removeFromWishlist } from "../Method/Method";

const WishCard = ({ gadget }) => {
  const {
    product_image,
    product_title,
    price,
    product_id,
    description,
    availability,
  } = gadget;
  const handleAddToCart = (id) => {
    addToCartList(id);
    removeFromWishlist(id);
  };
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
        <p className="text-black">{description}</p>
        <h3 className="text-black text-xl font-semibold">Price: ${price}</h3>
        <button
          className="btn btn-primary"
          onClick={() => handleAddToCart(product_id)}
          disabled={!availability}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default WishCard;
