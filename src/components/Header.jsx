import Navbar from "./Navbar";
import "./../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <section className="image-container"></section>
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
