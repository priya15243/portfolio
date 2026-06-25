import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="App">

      <Navbar setActivePage={setActivePage} />

      {activePage === "home" && <Hero />}
      {activePage === "education" && <Education />}
      {activePage === "skills" && <Skills />}
      {activePage === "projects" && <Project />}
      {activePage === "contact" && <Contact />}

    </div>
  );
}

export default App;