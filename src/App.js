import { useContext } from "react";
import {
  Home,
  Profile,
  SingleMoviePage,
  About,
  Login,
  Register,
  Error,
  ProtectedRoute,
} from "./pages/index";
import { SharedLayout } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./modules/authcontext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:movieID" element={<SingleMoviePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
