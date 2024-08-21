import React from "react";
import logo from "../assets/logo.png";
import bottom from "../assets/bottom.svg";
import bottom2 from "../assets/bottom2.png";
import Footer from "./Footer";


function Template({title,p1,p2,p3}) {
  return (
    <div className="bg-rectangle4 bg-contain h-[50vh] ">
      <div className="py-10 pl-28">
        <img src={logo} className="w-16 h-16 rounded-2xl"></img>
      </div>

      <div className="text-white text-5xl font-bold text-center ">
        <p className="py-8">{title}</p>
      </div>

      <div className="">
        <img src={bottom}></img>
      </div>

      <div className="mx-32 text-gray-700">
        <p >
         {p1}
        </p><br></br>
        <p >
         {p2}
        </p><br></br>
        <p >
       {p3}
        </p>
      </div>
      

      <div className="bg-rectangle5 ">
      <div className="">
        <img src={bottom2}></img>

        <div className="text-white pb-7">
          <Footer/>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Template;
