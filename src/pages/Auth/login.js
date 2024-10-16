import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setErrors] = useState(false);
  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
    setSubmitted(false);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mockUser = {
      email: "example@email.com",
      password: "password",
    };
    if (email === mockUser.email || password === mockUser.password) {
      setErrors(true);
      setSubmitted(true);
      navigate("/profile");
    } else {
      setErrors(false);
      setSubmitted(true);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <div className="text-2xl font-bold mb-6 text-center">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">
            Please fill in both email and password.
          </div>
        )}

        {submitted && !error && (
          <div className="text-green-500 text-sm">Login successful!</div>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          login
        </button>
      </form>
    </div>
  );
}
