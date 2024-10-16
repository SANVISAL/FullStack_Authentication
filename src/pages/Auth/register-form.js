import { useState } from "react";
export default function RegisterForm() {
  const [userName, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleUserName = (event) => {
    setUsername(event.target.value);
    setSubmitted(false);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setSubmitted(false);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userName === "" || email === "" || password === "") {
      setErrors(true);
    } else {
      setErrors(false);
      setSubmitted(true);
    }
    const userData = { userName, gender, email, password };
    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const successMessage = () => (
    <div
      className="text-green-500 font-bold p-4"
      style={{ display: submitted ? "" : "none" }}
    >
      <h1>User {userName} successfully registered!</h1>
    </div>
  );

  const errorMessage = () => (
    <div
      className="text-red-500 font-bold p-4"
      style={{ display: errors ? "" : "none" }}
    >
      <h1>Please fill all fields</h1>
    </div>
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center">
          User Register Form
        </h1>
      </div>

      <div className="message">
        {errorMessage()}
        {successMessage()}
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          onChange={handleUserName}
          className="mb-4 w-full px-3 py-2 border rounded-md"
          value={userName}
          type="text"
          placeholder="Enter your name"
        />

        <label className="block mb-2 text-sm font-medium">Gender</label>
        <select
          onChange={handleGender}
          className="mb-4 w-full px-3 py-2 border rounded-md"
          value={gender}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          onChange={handleEmail}
          className="mb-4 w-full px-3 py-2 border rounded-md"
          value={email}
          type="email"
          placeholder="Enter your email"
        />

        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          onChange={handlePassword}
          className="mb-4 w-full px-3 py-2 border rounded-md"
          value={password}
          type="password"
          placeholder="Enter your password"
        />
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
