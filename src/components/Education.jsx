import educationImg from "../assets/education.png";

function Education() {
  return (
    <section id="education" className="section">

      <div className="education-layout">

        {/* LEFT SIDE */}

        <div className="education-left">

          <h2 className="education-title">
            Education
          </h2>

          <div className="education-image-box">
            <img
              src={educationImg}
              alt="Education"
              className="education-image"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="education-details">

          <div className="edu-card">
            <h3>Class 10th</h3>
            <p>Sardar Patel School</p>
            <p>Percentage : 91%</p>
          </div>

          <div className="edu-card">
            <h3>Class 12th</h3>
            <p>Sardar Patel School</p>
            <p>Percentage : 80.5%</p>
          </div>

          <div className="edu-card">
            <h3>B.Tech Computer Science Engineering</h3>
            <p>
              Jaypee University of Engineering &
              Technology, Guna
            </p>
            <p>Cummins Scholarship Recipient</p>
            <p>CGPA : 7.4</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;