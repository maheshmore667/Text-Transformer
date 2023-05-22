import React from 'react';
import "../Styles/About.css";
import { Link } from 'react-router-dom';
import Mahesh from "../Assets/MAHESH.jpg"

export default function About() {
  return (
    <section className="about-us">
    <div className="about">
      <img src={Mahesh} className="pic" alt=""/>
      <div className="text">
        <h2>About Me</h2>
        <h5>MEAN && MERN Developer & <span>Technical Author</span></h5>
          <p>My name is Mahesh More. I am  MEAN and MERN stack developer having total experience of 4+ years.</p>
          <p>Sweet and simple intro I guess!!</p>
        <div className="data">
        <Link to="/" className="hire">Hire Me</Link>
        </div>
      </div>
    </div>
  </section>
  )
}
