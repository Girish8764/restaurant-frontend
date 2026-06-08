import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Restaurants />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
