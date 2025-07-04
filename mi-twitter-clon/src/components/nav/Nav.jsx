import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({ user, onLogout }) => (
  <nav className="navbar">
    <svg className="navbar-logo" viewBox="0 0 24 24" fill="#1da1f2">
      <g>
        <path d="M22.46 5.92c-.77.34-1.6.57-2.47.67a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.88a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.22-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57a8.72 8.72 0 0 0 2.15-2.22z"/>
      </g>
    </svg>
    <Link to="/" className="navbar-link">Inicio</Link>
    {user && <Link to="/profile" className="navbar-link">Perfil</Link>}
    {!user ? (
      <Link to="/login" className="navbar-link">Login</Link>
    ) : (
      <button onClick={onLogout} className="navbar-button">Cerrar sesión</button>
    )}
  </nav>
);

export default Nav;