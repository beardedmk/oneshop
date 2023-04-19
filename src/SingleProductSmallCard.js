import React from "react";

function SingleProductSmallCard(props) {
  return (
    <div className="bg-black max-w-[80px] max-h-[80px] mt-2 ring-1">
      <ul>
        <li>
          <img src={props.img} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default SingleProductSmallCard;
