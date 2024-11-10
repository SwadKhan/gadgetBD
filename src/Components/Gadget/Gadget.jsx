import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_image, product_title, price, product_id } = gadget;
  return (
    <div className="card lg:card bg-violet-200 shadow-xl p-3">
      <figure className=" rounded-2xl bg-slate-600">
        <img
          className="h-[181px] w-full"
          src={product_image}
          alt="product_image"
        />
      </figure>
      <div className="card-body items-start">
        <h2 className="card-title text-black">{product_title}</h2>
        <p className="text-black">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/gadgets/${product_id}`}>
            <button className="btn btn-primary  ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
