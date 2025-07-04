import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
      navigate("/profile");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;