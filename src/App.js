import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import About from "./pages/About";
import SingleMoviePage from "./pages/SingleMoviePage";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/movies/:movieID" element={<SingleMoviePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
