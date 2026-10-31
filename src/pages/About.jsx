import React from "react";

const values = [
  { title: "Natural Edits", text: "We keep skin, light and colour true to the moment." },
  { title: "Fast Delivery", text: "Most orders are returned within 24 to 48 hours." },
  { title: "Careful Hands", text: "Every photo is checked by a senior editor before delivery." }
];

function About() {
  return (
    <section className="page">
      <h2 className="page-title">About LensArt</h2>
      <p className="page-sub">A small studio from Coimbatore, Tamil Nadu</p>

      <div className="panel">
        <h3>Our Story</h3>
        <p>
          LensArt started as a weekend editing desk for a few local photographers. Today our
          team of editors works on portraits, weddings, products and old family photos for
          more than 500 photographers across India.
        </p>
        <p>
          This website is built with ReactJS. Each page is a component, and React Router
          switches between them without reloading the browser.
        </p>
      </div>

      <div className="grid">
        {values.map((v) => (
          <div className="card" key={v.title}>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
