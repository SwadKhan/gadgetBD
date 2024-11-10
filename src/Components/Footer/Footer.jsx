import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-10">
      <div className="flex flex-col items-center justify-center gap-4 mb-10">
        <h4 className="text-3xl font-bold text-white">Gadget Heaven</h4>
        <p className="text-lg text-white">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="w-full h-1 bg-white mb-10"></div>
      <div className="w-7/12 footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 items-center mx-auto">
        <nav>
          <h6 className="footer-title text-xl font-semibold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </div>
      <div className="text-center mt-6 text-white">
        <p>&copy; 2024 Gadget Heaven. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
