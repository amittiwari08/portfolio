import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",     // 🔥 replace
      "YOUR_TEMPLATE_ID",    // 🔥 replace
      form,
      "YOUR_PUBLIC_KEY"      // 🔥 replace
    )
    .then(() => {
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send ❌");
    });
  };

  return (
    <section className="section-dark" id="contact">

      {/* CONTACT CARD */}
      <div className="contact-card">
        <h2>Contact Me</h2>

        <p>
          I’m open to internships, freelance projects, and collaborations.
          Let’s build something impactful together.
        </p>

        <div className="contact-info">

          {/* EMAIL */}
          <div>
            <h4>Email</h4>

            <a href="mailto:akmth3322@gmail.com" className="contact-link">
              akmth3322@gmail.com
            </a>
            <br />

            <a href="mailto:btech15037.23@bitmesra.ac.in" className="contact-link">
              btech15037.23@bitmesra.ac.in
            </a>
          </div>

          {/* PHONE */}
          <div>
            <h4>Phone</h4>
            <a href="tel:9117716561" className="contact-link">
              +91 9117716561
            </a>
          </div>

          {/* LOCATION */}
          <div>
            <h4>Location</h4>
            <p>India</p>
          </div>

        </div>
      </div>

      {/* FORM */}
      <div className="form-section">
        <h3>Get In Touch</h3>

        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Write your message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default Contact;