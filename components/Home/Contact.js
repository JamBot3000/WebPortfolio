const Contact = () => {
  return (
    <div class="c-contact-form" id="contact">
      <div class="container">
        <div class="row">
          <div class="col col-12">
            <div class="c-contact-form__form-box">
              <div class="c-contact-form__contact-head">
                <h2 class="c-contact-form__contact-title">Get in touch</h2>
                <p class="c-contact-form__contact-description">
                  Feel free to contact me for any reason
                </p>
              </div>
              <form action="#" class="c-contact-form__form" method="POST">
                <div class="c-contact-form__form-group">
                  <label
                    class="c-contact-form__form-label screen-reader-text"
                    for="form-name"
                  >
                    Your Name
                  </label>
                  <input
                    class="c-contact-form__form-input"
                    id="form-name"
                    name="name"
                    placeholder="Your name..."
                    required=""
                    type="text"
                  />
                </div>
                <div class="c-contact-form__form-group">
                  <label
                    class="c-contact-form__form-label screen-reader-text"
                    for="form-email"
                  >
                    Your Email
                  </label>
                  <input
                    class="c-contact-form__form-input"
                    id="form-email"
                    name="_replyto"
                    placeholder="Your email..."
                    required=""
                    type="email"
                  />
                </div>
                <div class="c-contact-form__form-group">
                  <label
                    class="c-contact-form__form-label screen-reader-text"
                    for="form-text"
                  >
                    Your Message
                  </label>
                  <textarea
                    class="c-contact-form__form-input"
                    id="form-text"
                    name="text"
                    placeholder="Your message..."
                    required=""
                    rows="9"
                  ></textarea>
                </div>
                <div class="c-contact-form__form-group c-contact-form__form-group--button">
                  <button
                    class="c-button c-button--primary c-button--large"
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
