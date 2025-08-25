"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const bgStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/Orthopedics.svg')",
  backgroundRepeat: "repeat, repeat, repeat",
  backgroundSize: "80px 80px",
  backgroundPosition: "center",
  backgroundColor: "#f0f4f8",
  backgroundBlendMode: "overlay",
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "adops@gmail.com" && password === "qwerty") {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={bgStyle} className="flex items-center justify-center p-8">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md min-w-[320px] w-full max-w-md"
      >
        <h2 className="mb-6 text-4xl font-semibold font-cormorant_garamond">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
