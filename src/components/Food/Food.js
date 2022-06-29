import React from "react";
import image from "../../images/dinner1.png";

const Food = (props) => {
  // console.log(props.meal);
  const { strMeal, strInstructions, strMealThumb } = props.meal;

  return (
    <div className="text-start bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      {/* <h1>Joy Bangla</h1> */}
      {/* <h1 className="text-xl">Podda setu</h1> */}
      <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">
        {strMeal.slice(0, 50)}
      </span>
      <img
        className="w-full mx-auto transform transition duration-300 hover:scale-105"
        src={strMealThumb}
        alt=""
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        {/* <h1 className="text-gray-900 poppins text-lg">{strInstructions}</h1> */}
        <p className="text-gray-500 poppins text-sm text-start">
          {strInstructions.slice(0, 50)}
        </p>
        <h2 className="text-gray-900 poppins text-2xl font-bold">
          {strMeal}
        </h2>
        <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Food;
