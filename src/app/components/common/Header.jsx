import { Link } from "react-router-dom";
import PR from "../router/routePath";

export default function Header() {
  return (
    <header className="app-header">

      {/* Logo / Title */}
      <div className="logo">
        ⚡ Solo Training System
      </div>

      {/* Navigation Menu */}
      <nav className="nav-links">
        <Link to={PR.DASHBOARD}>Dashboard</Link>
        <Link to={PR.WORKOUT}>Workout</Link>
        <Link to={PR.PROGRESS}>Progress</Link>
        <Link to={PR.ACHIEVEMENTS}>Achievements</Link>
      </nav>

    </header>
  );
}
