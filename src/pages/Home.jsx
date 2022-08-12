import { Movies, Slider, Footer } from "../components/index";
import "./../styles/pages/home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <Slider />
      <Movies />
      <Footer />
    </div>
  );
};

export default Home;
