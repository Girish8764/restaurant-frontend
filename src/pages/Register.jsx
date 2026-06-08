import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const register = async () => {

    try {

      await api.post(
        "/auth/register",
        form
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert("Registration Failed");

    }

  };

  return (

    <div className="flex justify-center items-center h-screen bg-slate-950">

      <div className="bg-slate-800 p-8 rounded-xl w-96 shadow-lg">

        <h1 className="text-4xl font-bold mb-6 text-white">

          Register

        </h1>

        <input
          placeholder="Username"
          className="w-full p-3 mb-4 rounded text-black"
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value
            })
          }
        />

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 rounded text-black"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded text-black"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button
          onClick={register}
          className="bg-orange-500 hover:bg-orange-600 p-3 w-full rounded text-white font-bold"
        >
          Register
        </button>

      </div>

    </div>

  );

}
