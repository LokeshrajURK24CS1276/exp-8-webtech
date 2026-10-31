import React, { useState } from "react";
import FormField from "../components/FormField.jsx";

function Contact() {
  const [message, setMessage] = useState({ name: "", text: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const canSend = message.name.trim() !== "" && message.text.trim() !== "";

  return (
    <section className="page">
      <h2 className="page-title">Contact Us</h2>
      <p className="page-sub">Reach out for quotes, bulk orders or any queries</p>

      <div className="two-col">
        <div className="panel">
          <h3>Studio Details</h3>
          <table className="info-table">
            <tbody>
              <tr><th>Email</th><td>hello@lensart.in</td></tr>
              <tr><th>Phone</th><td>+91 98765 43210</td></tr>
              <tr><th>Hours</th><td>Mon &ndash; Sat, 9 AM &ndash; 7 PM</td></tr>
              <tr><th>Address</th><td>Coimbatore, Tamil Nadu, India</td></tr>
            </tbody>
          </table>
        </div>

        <div className="panel">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <FormField label="Your Name" name="cname">
              <input id="cname" name="name" value={message.name} onChange={update} placeholder="Enter your name" />
            </FormField>
            <FormField label="Message" name="ctext">
              <textarea id="ctext" name="text" rows="4" value={message.text} onChange={update} placeholder="How can we help?" />
            </FormField>
            <button type="submit" disabled={!canSend}>Send Message</button>
            {sent && <p className="success">Thank you, {message.name}! We will reply soon.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
