import { useContext } from "react";
import { Movies, Slider } from "../components/index";
import { MoviesContext } from "../modules/context";
import "./../styles/pages/home.css";

const Home = () => {
  const { showSlider } = useContext(MoviesContext);
  return (
    <div className="wrapper">
      {showSlider && <Slider />}
      <Movies />
    </div>
  );
};

export default Home;
