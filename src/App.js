import React from "react"
import Header from './components/Header/Header.js';
import Topcontainer from './components/Topcontainer/Topcontainer.js';
import SkillContainer from './components/SkillContainer/SkillContainer.js';
import ProjectContainer from './components/ProjectContainer/ProjectContainer.js'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer.js'
import './App.css';
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Topcontainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );
}

export default App;
