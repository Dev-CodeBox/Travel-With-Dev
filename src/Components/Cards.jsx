import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className=" card w-[400px] h-max m-4 p-4 flex flex-col rounded-xl items-center">
      <img
        src={image}
        className=" w-[380px] rounded-lg aspect-square object-cover"
      ></img>

      <div className=" mx-1 my-5">
        <div>
          <h4 className=" text-[#1faa59] text-2xl">₹ {price}</h4>
          <h4 className=" text-2xl">{name}</h4>
        </div>

        <div className=" font-serif">
          {description}
          <span
            className=" text-[#12b0e8] cursor-pointer"
            onClick={readmoreHandler}
          >
            {readmore ? `Show Less` : `Read \More`}
          </span>
        </div>
      </div>

      <button
        className="my-[18px] px-20 py-5 border-2 border-solid border-[#b4161b] cursor-pointer rounded-[10px] text-lg font-bold bg-[#b4161b21] hover:bg-[red] hover:text-white hover:transition-all"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Card;
