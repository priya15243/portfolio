function Navbar({ setActivePage }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Priya Singh</h2>

      <ul className="nav-links">

        <li>
          <button onClick={() => setActivePage("home")}>
            Home
          </button>
        </li>

        <li>
          <button onClick={() => setActivePage("education")}>
            Education
          </button>
        </li>

        <li>
          <button onClick={() => setActivePage("skills")}>
            Skills
          </button>
        </li>

        <li>
          <button onClick={() => setActivePage("projects")}>
            Projects
          </button>
        </li>

        <li>
          <button onClick={() => setActivePage("contact")}>
            Contact
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;