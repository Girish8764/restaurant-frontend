import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function RestaurantDetails() {

  const { id } = useParams();

  const [foods, setFoods] = useState([]);

  useEffect(() => {

    fetchFoods();

  }, []);

  const fetchFoods = async () => {

    try {

      const res = await api.get(
        `/foods/restaurant/${id}`
      );

      setFoods(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  const placeOrder = async (foodId) => {

    try {

      const token =
        localStorage.getItem("token");

      await api.post(
        "/orders",
        {
          items: [
            {
              foodId,
              quantity: 1
            }
          ]
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert("Order Placed");

    } catch (error) {

      console.error(error);

      alert("Order Failed");

    }

  };

  return (
    <>
      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">

          Restaurant Menu

        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {foods.map((food) => (

            <div
              key={food.id}
              className="bg-slate-800 rounded-xl p-5"
            >

              <img
                src={food.imageUrl}
                alt={food.name}
                className="rounded-lg h-48 w-full object-cover"
              />

              <h2 className="text-2xl mt-4">

                {food.name}

              </h2>

              <p className="text-gray-400">

                {food.description}

              </p>

              <h3 className="text-orange-500 text-xl mt-3">

                ₹ {food.price}

              </h3>

              <button
                onClick={() =>
                  placeOrder(food.id)
                }
                className="bg-orange-500 hover:bg-orange-600 p-3 mt-4 rounded w-full"
              >
                Order Now
              </button>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}
