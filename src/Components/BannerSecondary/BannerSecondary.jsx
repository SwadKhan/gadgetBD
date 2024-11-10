import React from "react";
import bannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className=" bg-violet-500  ">
        <div className="flex flex-col justify-center items-center text-center mb-36">
          <h2 className="text-3xl font-bold mb-2 mt-4 text-white">
            Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories
          </h2>
          <p className="text-white mb-3">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
