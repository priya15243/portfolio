import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">

      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-center">

        <div className="contact-item">

          <div className="contact-top">
            <FaEnvelope className="contact-icon" />
            <h4>Email</h4>
          </div>

          <p>priyasingh15032006@gmail.com</p>

        </div>

        <div className="contact-item">

          <div className="contact-top">
            <FaPhone className="contact-icon" />
            <h4>Phone</h4>
          </div>

          <p>+91 9340984924</p>

        </div>

        <div className="contact-item">

          <div className="contact-top">
            <FaLinkedin className="contact-icon" />
            <h4>LinkedIn</h4>
          </div>

          <p>linkedin.com/in/priya-singh-b483052a6</p>

        </div>

        <div className="contact-item">

          <div className="contact-top">
            <FaMapMarkerAlt className="contact-icon" />
            <h4>Location</h4>
          </div>

          <p>Rewa, Madhya Pradesh, India</p>

        </div>

      </div>

    </section>
  );
}

export default Contact;