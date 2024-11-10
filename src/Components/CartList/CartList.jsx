import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredList } from "../Method/Method";
import CartCard from "../CartCard/CartCard";
import Banner from "../BannerSecondary/BannerSecondary";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const allGadget = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const storedList = getStoredList();
    const storedCartList = storedList.map((id) =>
      allGadget.find((gadget) => gadget.product_id === id)
    );

    setCartList(storedCartList);
    const total = storedCartList.reduce((acc, gadget) => acc + gadget.price, 0);
    setTotalPrice(total);
  }, [allGadget]);

  const handlePurchase = () => {
    if (cartList.length > 0) {
      document.getElementById("my_modal_5").showModal();
      localStorage.removeItem("cart-list");
      setCartList([]);
      setTotalPrice(0);
      toast("Purchase successful! Your cart has been cleared.");
    }
  };

  const handleModalClose = () => {
    document.getElementById("my_modal_5").close();
    navigate("/cartList");
  };

  const handleSortByPrice = () => {
    const sortedCartList = [...cartList].sort((a, b) => {
      if (b.price !== a.price) {
        return b.price - a.price;
      }

      return a.product_id - b.product_id;
    });
    setCartList(sortedCartList);
  };

  return (
    <div>
      <Banner />
      <div className="flex flex-row gap-3 w-full items-center justify-center bg-violet-500 -mt-28">
        <button className="btn bg-green-200 text-black">Cart</button>
        <NavLink to="/wishList">
          <button className="btn">Wishlist</button>
        </NavLink>
      </div>
      <div className="flex flex-col w-full mx-auto mt-16 bg-black">
        <div className="flex justify-between w-9/12 mx-auto gap-1 items-center">
          <h2 className="text-xl font-bold">Cart</h2>
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-xl font-bold">Total cost: ${totalPrice}</h2>
            <button
              className="btn bg-yellow-200 text-black"
              onClick={handleSortByPrice}
            >
              Sort by Price
            </button>
            <button
              className="btn bg-green-400 text-black"
              onClick={handlePurchase}
              disabled={cartList.length === 0 || totalPrice === 0}
            >
              Purchase
            </button>
          </div>
        </div>
        <div className="mt-4">
          {cartList.map((gadget) => (
            <CartCard key={gadget.product_id} gadget={gadget} />
          ))}
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box items-center">
          <h3 className="font-bold text-xl text-green-400">Congratulations!</h3>
          <p className="py-4">
            Your purchase was successful. Your cart is now empty.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handleModalClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartList;
