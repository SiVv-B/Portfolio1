import React from 'react'
import "./intro.css"
import Me from "../../img/me.png"

function Intro() {
  return (
  <div className="i">
  <div className="i-left">

    <div className="i-left-wrapper">

      <h2 className="i-hello">Hello, my name is </h2> 
      <h1 className="i-name">Siwar Belkhir</h1>
      <h2 className="i-iam">I am a </h2>
      
      <div className="i-title">
        <div className="i-title-wrapper">
          <div className="i-title-item">Front End</div>
          <div className="i-title-item">Back End</div>
          <div className="i-title-item">Full Stack</div>
        </div>
      </div>
      <h1 className="i-webdev">Web Developer</h1>
</div>

   
  </div>
  <div className="i-right">
    <div className="i-bg"></div>
    <img src={Me} alt="" className="i-img" />
  </div>
</div>
);
};


export default Intro
