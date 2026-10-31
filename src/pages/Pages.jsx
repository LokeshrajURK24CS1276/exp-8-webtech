import { Link } from "react-router-dom";

const services = [
  { title: "Color Grading", price: "Rs.299" },
  { title: "Skin Retouching", price: "Rs.399" },
  { title: "Photo Restoration", price: "Rs.499" }
];

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>LensArt</h1>
          <p className="tagline">Professional Photo Editing Studio</p>
          <Link className="button" to="/register">Register Now</Link>
          <Link className="button button-outline" to="/about">About Us</Link>
        </div>
        <img src={import.meta.env.BASE_URL + "lensart.jpg"} alt="LensArt before and after edit" />
      </section>
      <section className="page grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <span className="price">{s.price}</span>
          </div>
        ))}
      </section>
    </>
  );
}

export function About() {
  return (
    <section className="page panel">
      <h2>About LensArt</h2>
      <p>LensArt is a small photo editing studio from Coimbatore. Our editors work on portraits,
        weddings, products and old family photos for more than 500 photographers.</p>
      <p>This site is built with ReactJS - every page is a component and React Router changes
        pages without reloading the browser.</p>
    </section>
  );
}

export function Contact() {
  return (
    <section className="page panel">
      <h2>Contact Us</h2>
      <p>Email: hello@lensart.in</p>
      <p>Phone: +91 98765 43210</p>
      <p>Hours: Monday to Saturday, 9 AM - 7 PM</p>
    </section>
  );
}
