import { toast } from "react-toastify";

const getStoredList = () => {
  const storedCartList = localStorage.getItem("cart-list");
  if (storedCartList) {
    const storeList = JSON.parse(storedCartList);
    return storeList;
  } else {
    return [];
  }
};
const getStoredWishList = () => {
  const storedCartList = localStorage.getItem("wish-list");
  if (storedCartList) {
    const storeList = JSON.parse(storedCartList);
    return storeList;
  } else {
    return [];
  }
};

const addToCartList = (id) => {
  const storedList = getStoredList();
  storedList.push(id);
  const storedCartList = JSON.stringify(storedList);
  localStorage.setItem("cart-list", storedCartList);
  toast("This Book is added to the Cart List");
};

const addToWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    toast("Already exists in the Wish List");
  } else {
    storedList.push(id);
    const storedCartList = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedCartList);
    toast("Successfully added to the Wish List")
  }

};
const removeFromWishlist = (id) => {

  const existingWishlist = JSON.parse(localStorage.getItem("wish-list")) || [];

  const updatedWishlist = existingWishlist.filter((itemId) => itemId !== id);
  localStorage.setItem("wish-list", JSON.stringify(updatedWishlist));
};

export { addToCartList, getStoredList, addToWishList, getStoredWishList, removeFromWishlist };
