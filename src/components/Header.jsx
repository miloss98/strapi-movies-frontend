import Navbar from "./Navbar";
import "./../styles/components/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <section
        className="image-container"
        onClick={() => navigate("/")}
      ></section>
      <section className="title-container">
        <h1 className="title"> Movies App </h1>
      </section>
      <section className="nav-container">
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
