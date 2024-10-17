import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./pages/Auth/register-form";
import Login from "./pages/Auth/login";
import Profile from "./pages/Auth/profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App;
