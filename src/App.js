import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./style.css";
import WorkFromHome from "./components/WorkFromHome";
import Register from "./components/Register";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // to do auth state listener
  }, []);


  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/work-from-home" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/work-from-home" /> : <Register />}
        />
        <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route path="work-from-home" element={<WorkFromHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
