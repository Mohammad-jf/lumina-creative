"use client";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firsName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const inputHandler = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact">
      <div className="container container-sm">
        <h2 className="section-heading">Contact Us</h2>
        <p>
          Have a question? Leave your information below and we will get back to
          you as soon as possible
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="firstName" className="visually-hidden">
              First Name
            </label>
            <input
              onChange={inputHandler}
              value={formData.firsName}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="visually-hidden">
              Last Name
            </label>
            <input
              onChange={inputHandler}
              value={formData.lastName}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="visually-hidden">
              Email Address
            </label>
            <input
              onChange={inputHandler}
              value={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              onChange={inputHandler}
              value={formData.message}
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>

            <div className="form-group">
              <button className="btn">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
