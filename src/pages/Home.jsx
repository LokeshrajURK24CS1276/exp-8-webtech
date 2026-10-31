import React from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "Color Grading", text: "Cinematic tones and mood correction for every shoot.", price: "Rs.299" },
  { title: "Skin Retouching", text: "Natural, blemish-free portraits without the plastic look.", price: "Rs.399" },
  { title: "Photo Restoration", text: "Bring old, damaged prints back to life.", price: "Rs.499" }
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>LensArt</h1>
            <p className="tagline">Professional Photo Editing Studio</p>
            <p className="hero-sub">
              A modern ReactJS interface for our clients &ndash; register, sign in and
              explore the studio without the page ever reloading.
            </p>
            <Link className="button" to="/register">Register Now</Link>
            <Link className="button button-outline" to="/about">About Us</Link>
          </div>
          <div className="hero-img">
            <img src={`${import.meta.env.BASE_URL}lensart.jpg`} alt="LensArt before and after edit" />
          </div>
        </div>
      </section>

      <section className="page">
        <h2 className="page-title">Our Services</h2>
        <p className="page-sub">Pick the edit that fits your photo</p>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="price">{s.price}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
