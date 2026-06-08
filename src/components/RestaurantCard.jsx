import { Link } from "react-router-dom";

export default function RestaurantCard({
  restaurant
}) {

  return (

    <Link
      to={`/restaurant/${restaurant.id}`}
    >

      <div className="bg-slate-800 rounded-xl p-4 hover:scale-105 transition">

        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="rounded-lg h-48 w-full object-cover"
        />

        <h2 className="text-xl mt-3 font-bold">

          {restaurant.name}

        </h2>

        <p className="text-gray-400">

          {restaurant.cuisine}

        </p>

      </div>

    </Link>

  );

}
