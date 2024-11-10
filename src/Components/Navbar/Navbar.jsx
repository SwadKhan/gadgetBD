import React from "react";
import cart_img from "../../assets/icons8-cart-50.png";
import love_img from "../../assets/icons8-love-24.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="#footer">
              <li>Services</li>
            </NavLink>
            <NavLink to="/">
              <li>Dashboard</li>
            </NavLink>
            <NavLink to="/statistics">
              <li>Statistics</li>
            </NavLink>
          </ul>
        </div>
        <NavLink to="/">
          <a className="btn btn-ghost text-xl text-white">Gadget Heaven </a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white gap-2">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="#footer">
            <li>Services</li>
          </NavLink>
          <NavLink to="/">
            <li>Dashboard</li>
          </NavLink>
          <NavLink to="/statistics">
            <li>Statistics</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <NavLink to="/cartList">
          <img
            src={cart_img}
            className="w-11 h-11 p-3 rounded-full bg-slate-300 items-center"
            alt="Cart"
          />
        </NavLink>
        <NavLink to="/wishList">
          <img
            src={love_img}
            className="w-11 h-11 p-3 bg-slate-300 rounded-full"
            alt="Favorites"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
