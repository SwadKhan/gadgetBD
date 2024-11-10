import React from "react";
import bannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className=" bg-violet-500  rounded-xl">
        <div className="flex flex-col justify-center items-center text-center mb-36">
          <h2 className="text-3xl font-bold mb-2 mt-4 text-white">
            Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories
          </h2>
          <p className="text-white mb-10">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>
          <button className="p-4 bg-white text-violet-500 font-semibold text-lg w-36 rounded-full ">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-7/12 h-72  p-2 -mt-28 backdrop-blur-md border-2 border-white rounded-xl translate-y-2 opacity-1 mx-auto">
        <img
          src={bannerImage}
          className="w-full h-full rounded-xl items-center"
          alt="bannerImage"
        />
      </div>
    </div>
  );
};

export default Banner;
