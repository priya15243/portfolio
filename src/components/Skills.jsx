import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <h2 className="skills-title"> Technical Skills</h2>

      <p className="skills-subtitle">
        Here are the technologies and tools I use to transform ideas
        into real-world web applications.
      </p>

      <div className="skills-grid">

        <div className="skill-card">
          <FaCode className="skill-icon" />

          <h3>Programming Languages</h3>

          <p>
            I use these technologies to build responsive,
            interactive and visually appealing websites.
          </p>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            
          </div>
        </div>

        <div className="skill-card">
          <FaServer className="skill-icon" />

          <h3>Backend Development</h3>

          <p>
            Backend technologies help create APIs,
            manage business logic and connect applications
            with databases.
          </p>

          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST API</span>
            <span>React.js</span>
            
          </div>
        </div>

        <div className="skill-card">
          <FaDatabase className="skill-icon" />

          <h3>Database Management</h3>

          <p>
            Databases help store, organize and retrieve
            application data securely and efficiently.
          </p>

          <div className="skill-tags">
            <span>SQL</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Excel</span>
            <span>Power BI</span>
          </div>
        </div>

        <div className="skill-card">
          <FaTools className="skill-icon" />

          <h3>Tools & Platforms</h3>

          <p>
            These tools help me write code,
            collaborate on projects and manage
            development workflows.
          </p>

          <div className="skill-tags">
            <span>VS Code</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Jupyter Notebook</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;