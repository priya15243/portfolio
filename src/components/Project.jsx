import amazonImg from "../assets/amazon.webp";
import healthcareImg from "../assets/healthcare.jpg";
import portfolioImg from "../assets/personal.jpg";


function Project() {
  return (
    <section id="projects" className="section">

      <h2 className="project-title">Projects</h2>

      <div className="projects-wrapper">

        {/* Amazon Clone */}

        <div className="project-card">

          <div className="project-image-section">
            <img
              src={amazonImg}
              alt="Amazon Clone"
              className="project-image"
            />
          </div>

          <div className="project-content">
            <h3>Amazon Clone</h3>

            <p>
              Developed a responsive Amazon homepage clone using
              HTML and CSS. The project includes navigation bar,
              search functionality, product sections and responsive
              layouts similar to the original Amazon website.
            </p>
          </div>

        </div>

        {/* Portfolio */}

        <div className="project-card">

          <div className="project-image-section">
            <img
              src={portfolioImg}
              alt="Portfolio Website"
              className="project-image"
            />
          </div>

          <div className="project-content">
            <h3>Personal Portfolio Website</h3>

            <p>
              Built a modern portfolio using React.js to showcase
              my education, skills, projects, achievements and
              contact information with a clean and responsive UI.
            </p>
          </div>

        </div>

        {/* Healthcare */}

        <div className="project-card">

          <div className="project-image-section">
            <img
              src={healthcareImg}
              alt="Healthcare AI"
              className="project-image"
            />
          </div>

          <div className="project-content">
            <h3>Healthcare AI System</h3>

            <p>
              Developed an AI-powered healthcare assistant using
              machine learning concepts for symptom analysis,
              disease prediction and healthcare recommendations.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;