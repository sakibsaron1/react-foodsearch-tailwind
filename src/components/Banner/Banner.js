import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./Banner.css";

const Banner = () => {
  const [searchtext, setSearchtext] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
    // .then((data) => console.log(data));
  }, [searchtext]);
  const searchFood = (e) => {
    setSearchtext(e.target.value);
  };

  return (
    <section className="header-banner h-96 w-full bg-yellow-50">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          Best food waiting for your belly {meals.length}
        </h1>

        <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
          <input
            type="text"
            className=" rounded-full px-4 focus:outline-none w-full bg-transparent border-none"
            placeholder="Search here ......."
            onChange={searchFood}
          />
          <button className="text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
            Search
          </button>
        </div>
      </div>

      <div className="food my-8">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700 mb-12">
          Search By Food Name
        </h1>
        <div className="grid grid-cols-1 gap-8 mx-2 sm:grid-cols-4 md:grid-cols-4 sm:mx-8 md:mx-8">
          {meals.map((meal) => (
            <Food key={meal.idMeal} meal={meal}></Food>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Banner;
