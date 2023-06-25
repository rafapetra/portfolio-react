import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  // Define project data
  const projectsData = [
    {
      id: 1,
      imageSrc: "img/apptize1.png",
      title: "Apptize",
      description: "Apptize is a web application...",
      tags: ["HTML", "CSS", "React", "Firebase", "Local Storage"],
      websiteUrl: "http://www.apptize.net",
    },
    // Define other projects here
  ];

  const skillsData = [
    "PHP",
    "WordPress CMS",
    "Docker",
    "MySQL",
    "AWS",
    "Firebase / Firestore",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  return (
    <div className="parent-div">
      <div className="container">
        <Header />
        <Menu />
        <Content />
      </div>
      <div className="container-2">
          <div className="content-2">
            <div className="content-projects">
              <h1>Projects</h1>

              <Projects
                imageSrc="img/apptize1.png"
                title="Apptize"
                description="Apptize is a web application that allows the user to register an account, save food items and their nutrition, and track their daily input of each macro nutrient."
                tags={["HTML", "CSS", "React", "Firebase", "Local Storage"]}
              />

              <Projects
                imageSrc="img/tinyshelf.png"
                title="TinyShelf"
                description="TinyShelf is a web application that lets you plan, add tasks, and share them with others. It's very similar to Task Pad."
                tags={["HTML", "CSS", "C#", "MVC", ".NET"]}
              />

              <Projects
                imageSrc="img/bird_track.png"
                title="Bird Tracker"
                description="An easy-to-use application for the on-the-go birder. The application fetches data from the eBird API to show recent species in any specified location."
                tags={["HTML", "CSS", "API"]}
              />

              <Projects
                imageSrc="img/baba.png"
                title="Restaurant Website"
                description="A website for a restaurant with responsive UI and UX in React JS."
                tags={["HTML", "CSS", "React"]}
              />
            </div>
          </div>
        </div>
        <div className="container-3">
          <div className="content-skill">
            <Skills skills={skillsData} />
          </div>
        </div>
    </div>
  );
};

export default App;
