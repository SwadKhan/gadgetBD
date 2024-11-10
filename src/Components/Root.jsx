import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";

const Root = () => {
  const location = useLocation();
  const [navbarStyle, setNavbarStyle] = useState("");

  useEffect(() => {
    if (location.pathname === `/`) {
      setNavbarStyle(
        "navbar pl-16 mt-8 pr-16 bg-violet-500 -mb-8 rounded-t-xl"
      );
    } else {
      setNavbarStyle("navbar w-11/12 mx-auto");
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar className={navbarStyle} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
