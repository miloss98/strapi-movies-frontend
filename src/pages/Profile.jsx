import { useContext } from "react";
import { AuthContext } from "../modules/authcontext";
import { Watchlist } from "./../components/index";
import "./../styles/pages/profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <nav>
          <h2 className="greetings">
            {" "}
            Hello, <span> {user.name} </span>
          </h2>
        </nav>
        <section className="profile-page-content">
          <h3> Watchlist</h3>
          <Watchlist />
        </section>
      </div>
    </div>
  );
};

export default Profile;
