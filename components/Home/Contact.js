import { useState } from "react";

const Contact = () => {
  const [senderName, setName] = useState("");
  const [senderEmail, setEmail] = useState("");
  const [senderMessage, setMessage] = useState("");

  function handleSubmit() {
    //* make a request to /contact with the supplied information
    //* api route will verify data is okay and send via mailgun

    let regExp =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!senderName || !regExp.test(senderEmail) || !senderMessage) {
      alert("all fields must be present & a valid email is required");
    } else {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: senderMessage,
        }),
      });

      //! change this so that this only happens if ths server returns an affirmative response
      alert("Message sent :)");

      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className="c-contact-form" id="contact">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="c-contact-form__form-box">
              <div className="c-contact-form__contact-head">
                <h2 className="c-contact-form__contact-title">Get in touch</h2>
                <p className="c-contact-form__contact-description">
                  Feel free to contact me for any reason
                </p>
              </div>
              <div className="c-contact-form__form">
                <div className="c-contact-form__form-group">
                  <label
                    className="c-contact-form__form-label screen-reader-text"
                    htmlFor="form-name"
                  >
                    Your Name
                  </label>
                  <input
                    className="c-contact-form__form-input"
                    name="name"
                    placeholder="Your name..."
                    required
                    type="text"
                    value={senderName}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="c-contact-form__form-group">
                  <label
                    className="c-contact-form__form-label screen-reader-text"
                    htmlFor="form-email"
                  >
                    Your Email
                  </label>
                  <input
                    className="c-contact-form__form-input"
                    id="form-email"
                    name="_replyto"
                    placeholder="Your email..."
                    type="email"
                    value={senderEmail}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="c-contact-form__form-group">
                  <label
                    className="c-contact-form__form-label screen-reader-text"
                    htmlFor="form-text"
                  >
                    Your Message
                  </label>
                  <textarea
                    required
                    className="c-contact-form__form-input"
                    name="text"
                    placeholder="Your message..."
                    rows="9"
                    value={senderMessage}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="c-contact-form__form-group c-contact-form__form-group--button">
                  <button
                    className="c-button c-button--contact c-button--large"
                    onClick={handleSubmit}
                  >
                    Send now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
