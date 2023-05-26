import React from 'react';
import "../Styles/About.css";
import { Link } from 'react-router-dom';
import Mahesh from "../Assets/MAHESH.jpg"

export default function About() {
  return (
    <section className="col-12 d-flex flex-column">
    <div className="col-12 d-flex justify-content-center">
      <img src={Mahesh} className="pic" alt=""/>
    </div>
    <div className="text col-12 text-center my-2">
        <h3>About Me</h3>
        <h5>MEAN && MERN Developer & <span>Technical Author</span></h5>
          <p>My name is Mahesh More. I am  MEAN and MERN stack developer having total experience of 4+ years.</p>
          <p>Sweet and simple intro I guess!!</p>
        <div className="data">
        <Link to="/" className="hire">Hire Me</Link>
        </div>
      </div>
  </section>
  )
}
