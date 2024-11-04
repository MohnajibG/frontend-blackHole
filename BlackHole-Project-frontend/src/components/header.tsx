import { Link } from "react-router-dom";
import "../assets/styles/Header.css";

export const Header: React.FC = () => {
  return (
    <main className="main-header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/apod">Apod</Link>
        <Link to="/epic">Epic</Link>
        <Link to="/mars">Mars</Link>

        <div className="animation start-home"></div>
      </nav>
    </main>
  );
};
