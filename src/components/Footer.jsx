import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-around items-center">
      <p>&copy;2024 Forrest App. All rights reserved.</p>

      <p>
        {" "}
        <Link to="/terms-conditions">Terms & Conditions</Link> &nbsp;&nbsp;{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </p>
      <div className="w-64">
        <button className="w-8 h-8 bg-black mx-2 px-2 rounded-full">
          <FaFacebookF className="text-white " />
        </button>
        <button className="w-8 h-8 bg-black mx-2 px-2 rounded-full">
          <FaInstagram className="text-white" />
        </button>
        <button className="w-8 h-8 bg-black mx-2 px-2 rounded-full">
          <FaLinkedinIn className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
