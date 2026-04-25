import avatar from "../assets/mypic1.jpeg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi There,<br />
          I'm <span>Amit</span>
        </h1>

        <p>I Am Into <strong>Web Development</strong></p>

        {/* ✅ BUTTONS */}
        <div className="hero-buttons">
          <button className="hero-btn">About Me</button>

         
        </div>

        <div className="socials">
          <a href="https://github.com/amittiwari08" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/amit-tiwari-78956224a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://instagram.com/amit_tiwari.08" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="https://twitter.com/dummyprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src={avatar} alt="Amit" />
        </div>
      </div>
    </section>
  );
}

export default Hero;