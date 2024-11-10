import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Banner from "../BannerSecondary/BannerSecondary";
import loveIcon from "../../assets/icons8-love-24.png";
import { addToCartList, addToWishList } from "../Method/Method";
import Navbar from "../Navbar/Navbar";

const GadgetDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = product_id;
  const gadget = data.find((gadget) => gadget.product_id === id);
  const {
    product_title,
    product_image,
    price,
    availability,
    description,
    specification,
    rating,
  } = gadget;

  const handleAddToCart = (id) => {
    addToCartList(id);
  };
  const handleAddToWish = (id) => {
    addToWishList(id);
  };

  return (
    <div className="">
      {/* <Navbar style={navbarStyle}></Navbar> */}
      <Banner></Banner>

      <div className="card card-side bg-base-100 shadow-xl gap-2 -mt-32 w-11/12 mx-auto p-8">
        <figure className="rounded-2xl bg-slate-600 h-[503px] w-[424px]">
          <img
            className="w-full h-full bg-cover"
            src={product_image}
            alt="product_image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{product_title}</h2>
          <p className="text-lg">Price: ${price}</p>
          <p
            className={`text-center pt-3 rounded-2xl w-24 ${
              availability
                ? "bg-lime-400 text-white"
                : "bg-red-400 text-gray-700"
            }`}
          >
            {availability ? "In Stock" : "Not In Stock"}
          </p>
          <p>{description}</p>
          <div>
            <h3 className="font-semibold mt-2">Specifications:</h3>
            <ul className="list-decimal ml-5 mt-1">
              {specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <div>
              <h2 className="ml-2">{rating}</h2>
            </div>
          </div>

          <div className="card-actions gap-2 items-center">
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product_id)}
              disabled={!availability}
            >
              Add To Cart
            </button>
            <img
              className="bg-white p-2 rounded-full"
              onClick={() => handleAddToWish(product_id)}
              src={loveIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
