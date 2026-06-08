import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";

export default function Restaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {

    try {

      const res = await api.get("/restaurants");

      console.log("Restaurants API:", res.data);

      setRestaurants(
        Array.isArray(res.data)
          ? res.data
          : []
      );

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <>
      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-6">
          Restaurants
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {restaurants.map((restaurant) => (

            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />

          ))}

        </div>

      </div>
    </>
  );
}
