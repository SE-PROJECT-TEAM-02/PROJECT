import React, { useState } from "react";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  return (
    <section
      className="register-section flex-center login bg-signup bg-fixed bg-cover w-full h-full flex flex-col justify-center items-center px-4"
      id="contact"
    >
      <div className="contact-container flex-center contact relative">
        <div className="mb-8 flex flex-col justify-center items-center text-white z-[1]">
            <h1>Contact Us</h1>
            <h2>We are available 24/7 to address your queries</h2>
        </div>
        <form
          method="POST"
          action={`https://formspree.io/f/${process.env.REACT_FORMIK_SECRET}`}
          className="register-form "
        >
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <textarea
            type="text"
            name="message"
            className="form-input w-100"
            placeholder="Enter your message"
            value={formDetails.message}
            onChange={inputChange}
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="btn form-btn primary"
          >
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
