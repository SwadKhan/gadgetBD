import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { getStoredList, getStoredWishList } from "../Method/Method";
import Banner from "../BannerSecondary/BannerSecondary";
import { toast } from "react-toastify";
import WishCard from "../WishCard/WishCard";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const allGadget = useLoaderData();

  useEffect(() => {
    const storedList = getStoredWishList();
    const storedWishList = storedList.map((id) =>
      allGadget.find((gadget) => gadget?.product_id === id)
    );

    setWishList(storedWishList);
  }, [allGadget]);

  return (
    <div>
      <Banner />
      <div className="flex flex-row gap-3 w-full items-center justify-center bg-violet-500 -mt-28">
        <NavLink to="/cartList">
          <button className="btn ">Cart</button>
        </NavLink>

        <button className="btn bg-green-200 text-black">Wishlist</button>
      </div>
      <div className="flex flex-col w-full mx-auto mt-16 bg-black">
        <div className="flex justify-between w-9/12 mx-auto gap-1 items-center">
          <h2 className="text-xl font-bold text-white">Wishlist</h2>
        </div>
        <div className="mt-4">
          {wishList.length > 0 ? (
            wishList.map((gadget) => (
              <WishCard key={gadget.product_id} gadget={gadget} />
            ))
          ) : (
            <p className="text-center text-white mt-6">
              Your wishlist is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
