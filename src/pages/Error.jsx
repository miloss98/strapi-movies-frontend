import { useNavigate } from "react-router-dom";
import "./../styles/pages/error.css";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page-wrapper">
      <div className="error-page-container">
        <section className="content">
          <p className="error-404"> Error 404! </p>
          <p className="error-msg"> Page not found, try again!</p>
          <button className="back-home" onClick={() => navigate("/")}>
            {" "}
            Back to home page{" "}
          </button>
        </section>
      </div>
    </div>
  );
};

export default Error;
