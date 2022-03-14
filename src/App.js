import React from "react"
import Intro from "./componenets/intro/Intro"
import About from './componenets/about/About'
import ProjectList from "./componenets/projects/ProjectList";
import SingleProject from "./componenets/singlePrject/SingleProject";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
     <Intro/>
     <About/>
     <ProjectList/>
     <SingleProject/>
     <Contact/>
     
     
         </div>
  );
}

export default App;
