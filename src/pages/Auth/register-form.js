import { useState } from "react";

export default function RegisterForm() {
  const [userName, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "gender") setGender(value);
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let validationErrors = {};
    if (!userName) validationErrors.userName = "Username is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";
    if (!gender) validationErrors.gender = "Gender is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    const userData = { userName, gender, email, password };
    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("result:", result);
        const { accessToken } = result.token;
        localStorage.setItem("token", accessToken);
        setSubmitted(true);
        setUsername("");
        setGender("");
        setEmail("");
        setPassword("");
      } else {
        setErrors({ form: "Registration failed. Please try again." });
      }
    } catch (error) {
      setErrors({ form: "An error occurred. Please try again later." });
      console.error("Registration failed:", error);
    }
    setLoading(false);
  };

  const successMessage = () =>
    submitted && (
      <div className="text-green-500 font-bold p-4">
        <h1>User {userName} successfully registered!</h1>
      </div>
    );

  const errorMessage = () =>
    errors &&
    Object.values(errors).length > 0 && (
      <div className="text-red-500 font-bold p-4">
        {Object.values(errors).map((err, index) => (
          <h1 key={index}>{err}</h1>
        ))}
      </div>
    );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        User Register Form
      </h1>

      <div className="message">
        {errorMessage()}
        {successMessage()}
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          onChange={handleChange}
          name="userName"
          value={userName}
          type="text"
          placeholder="Enter your name"
          className="mb-4 w-full px-3 py-2 border rounded-md"
        />

        <label className="block mb-2 text-sm font-medium">Gender</label>
        <select
          onChange={handleChange}
          name="gender"
          value={gender}
          className="mb-4 w-full px-3 py-2 border rounded-md"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full px-3 py-2 border rounded-md"
        />

        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          type="password"
          placeholder="Enter your password"
          className="mb-4 w-full px-3 py-2 border rounded-md"
        />

        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
          type="submit"
          disabled={loading || !userName || !email || !password || !gender}
        >
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
