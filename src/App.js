import React from "react"
import Intro from "./componenets/intro/Intro"
import About from './componenets/about/About'
import ProjectList from "./componenets/projects/ProjectList";
import SingleProject from "./componenets/singlePrject/SingleProject";

function App() {
  return (
    <div className="App">
     <Intro/>
     <About/>
     <ProjectList/>
     <SingleProject/>
     
     
         </div>
  );
}

export default App;
