import { Movies, Slider } from "../components/index";
import "./../styles/pages/home.css";
const Home = () => {
  return (
    <div className="wrapper">
      <Slider />
      <Movies />
    </div>
  );
};

export default Home;
