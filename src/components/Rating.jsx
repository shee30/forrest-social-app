import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


function Rating({ ratingValue }) {
  const rating = parseFloat(ratingValue);
  let ratingInteger = Math.floor(rating);
  const ratingFractional = rating - ratingInteger;
  // console.log(ratingValue, rating, ratingInteger, ratingFractional);
  const elements = [];
  for (let i = 1; i <= ratingInteger; i++) {
    elements.push(
        <FaStar className="text-yellow-400 text-2xl" />
    );
  }
  if (ratingFractional > 0 && ratingFractional <= 0.5) {
    elements.push(
        <FaStarHalfAlt className="text-yellow-400 text-2xl" />
    );
    ratingInteger += 1;
  } else if (ratingFractional > 0.5) {
    elements.push(
        <FaRegStar className="text-yellow-400 text-2xl" />
    );
    ratingInteger += 1;
  }
  // remaining stars
  for (let i = ratingInteger + 1; i <= 5; i++) {
    elements.push(<FaRegStar className="text-yellow-400 text-2xl" />);
  }
  return (
    <div className="flex ">
      {  elements.map((e)=>{
         return <p className="mx-1">{e}</p>
        })}
    </div>
  );
}

export default Rating;
