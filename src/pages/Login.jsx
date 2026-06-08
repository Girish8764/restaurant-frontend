import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/");

    } catch (error) {

      console.error(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="flex justify-center items-center h-screen bg-slate-950">

      <div className="bg-slate-800 p-8 rounded-xl w-96 shadow-lg">

        <h1 className="text-4xl font-bold mb-6 text-white">

          Login

        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 mb-4 rounded text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 mb-4 rounded text-black"
        />

        <button
          onClick={login}
          className="bg-orange-500 hover:bg-orange-600 p-3 w-full rounded text-white font-bold"
        >
          Login
        </button>

      </div>

    </div>

  );

}
