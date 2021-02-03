import React, { useState } from "react";
import ContactImage from "../assets/contact_doggo.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://hooks.zapier.com/hooks/catch/1239764/oo73gyz/`, {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then(() => setIsSent(true))
      .catch(() => alert("There was an error, please try again"));
  };

  const thankYouMessage = <p>Thank you for your input!</p>;

  return (
    <>
      <div className="contact-container">
        {isSent ? (
          thankYouMessage
        ) : (
          <>
              <div className="contact-left">
            <div className="contact-form_container">
           
          
              <h1 className="contact-header">Got questions? Ask away! </h1>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-info">
                    {/* <label>name</label> */}
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="form-element-name"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="form-element-email"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className="form-element-subject"
                    required
                  />

                  <br />
                    <textarea
                      rows="5"
                      type="text"
                      name="message"
                      placeholder="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="form-element-message"
                      required
                    />
                  <br />

                  <button
                    type="submit"
                    className="button_primary-color form-button btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="contact-right">
              <img
                src={ContactImage}
                className="contact-image"
                alt="about_corgi_image"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
