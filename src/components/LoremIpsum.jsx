import React from "react";
import btn2 from "../assets/btn2.png"

function LoremIpsum() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold"> Lorem Ipsum </h1>
      <p className="my-3 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis veniam dicta, ad, deleniti assumenda, hic nobis enim harum facilis aspernatur laborum repellat quasi vel!</p>
      <ul className="ml-5 list-disc text-gray-800">
        <li >Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti ullam neque sunt.</li>
      </ul>
      <button className="w-56 mt-4"><img src={btn2}></img></button>
    </div>
  );
}

export default LoremIpsum;
