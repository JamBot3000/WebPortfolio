const Contact = () => {
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
              <form action="#" className="c-contact-form__form" method="POST">
                <div className="c-contact-form__form-group">
                  <label
                    className="c-contact-form__form-label screen-reader-text"
                    htmlFor="form-name"
                  >
                    Your Name
                  </label>
                  <input
                    className="c-contact-form__form-input"
                    id="form-name"
                    name="name"
                    placeholder="Your name..."
                    required=""
                    type="text"
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
                    required=""
                    type="email"
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
                    className="c-contact-form__form-input"
                    id="form-text"
                    name="text"
                    placeholder="Your message..."
                    required=""
                    rows="9"
                  ></textarea>
                </div>
                <div className="c-contact-form__form-group c-contact-form__form-group--button">
                  <button
                    className="c-button c-button--contact c-button--large"
                    type="submit"
                  >
                    Send now
                  </button>
                </div>
                <input
                  name="_encrypted_details"
                  type="hidden"
                  value="ccdd41932fb80db17a04fbad0cc2ba2d93ebc5eac1cc4af0907cd96b"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
