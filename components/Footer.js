const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="social">
              <ul className="social__list list-reset">
                <li className="social__item">
                  <a
                    aria-label="instagram icon"
                    className="social__link"
                    href="https://instagram.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="ion ion-logo-instagram"></i>
                  </a>
                </li>

                <li className="social__item">
                  <a
                    aria-label="github icon"
                    className="social__link"
                    href="https://github.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="ion ion-logo-github"></i>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer_nav list-reset">
              <li className="footer_nav__item">
                <a className="footer_nav__link" href="">
                  Home
                </a>
              </li>

              <li className="footer_nav__item">
                <a className="footer_nav__link" href="">
                  Portfolio
                </a>
              </li>

              <li className="footer_nav__item">
                <a className="footer_nav__link" href="">
                  Blog
                </a>
              </li>

              <li className="footer_nav__item">
                <a className="footer_nav__link" href="">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
