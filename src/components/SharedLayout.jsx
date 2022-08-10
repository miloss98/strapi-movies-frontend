import { Header } from "./index";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
