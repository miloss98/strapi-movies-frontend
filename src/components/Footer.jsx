import "../styles/components/footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-top">
        <a
          className="links"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <RiFacebookFill className="logos" />
        </a>
        <a
          className="links"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="logos" />
        </a>
        <a
          className="links"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="logos" />
        </a>
        <a
          className="links"
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube className="logos" />
        </a>
      </section>
      <section className="footer-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          itaque rerum, voluptates assumenda commodi veritatis error, suscipit
          nihil tenetur ea ipsum. Lorem ipsum dolor sit amet consectetur.
        </p>{" "}
      </section>
      <section className="footer-bottom">
        <p className="copyright"> © 2022. qwerty </p>
      </section>
    </div>
  );
};

export default Footer;
