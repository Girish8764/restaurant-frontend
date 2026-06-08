import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav className="bg-slate-900 p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-orange-500">
        FoodHub
      </h1>

      <div className="space-x-4">

        <Link to="/">Restaurants</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/login">Login</Link>

      </div>

    </nav>

  );

}
