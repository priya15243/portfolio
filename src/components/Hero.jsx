import {
  FaGithub,
  FaLinkedin,
  FaEye,
  FaDownload
} from "react-icons/fa";

import profile from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero">

      <img
        src={profile}
        alt="Priya Singh"
        className="profile-img"
      />

      <h1 className="hero-title">
        Hi, I'm Priya Singh
      </h1>

      <h3>
        Frontend Developer | Data Analyst
      </h3>

      <p className="hero-text">
        Passionate Frontend Developer and aspiring Data Analyst
        with strong interest in Web Development, Data Analytics,
        and Machine Learning. Recipient of the prestigious
        Cummins Scholarship for academic excellence. I enjoy
        building modern web applications and leveraging data
        to solve real-world problems.
      </p>

      <div className="buttons">

        <a
          href="https://github.com/priya15243"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/priya-singh-b483052a6/"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <FaEye />
          View Resume
        </a>

        <a
          href={resume}
          download
          className="btn"
        >
          <FaDownload />
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Hero;