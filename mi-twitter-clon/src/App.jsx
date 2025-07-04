import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Nav from "./components/nav/Nav";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar información del usuario desde localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    setUser({ username });
    localStorage.setItem("user", JSON.stringify({ username }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Nav user={user} onLogout={logout} />
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user} onLogout={logout} />} />
        <Route 
          path="/profile" 
          element={
            user ? <Profile user={user} onLogout={logout} /> : <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;