import { Routes, Route } from "react-router-dom";
import Login from "../login/login.jsx";
import Dashboard from "../routes/dashboard.jsx";

function App() {
  return (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
