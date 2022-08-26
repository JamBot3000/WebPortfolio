import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="social">
              <ul className="social__list list-reset">
                <li className="social__item">
                  <Link href="https://instagram.com/jamie_on_drums">
                    <a
                      aria-label="instagram icon"
                      className="social__link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="ion ion-logo-instagram"></i>
                    </a>
                  </Link>
                </li>

                <li className="social__item">
                  <Link href="https://github.com/JamBot3000">
                    <a
                      aria-label="github icon"
                      className="social__link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="ion ion-logo-github"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="footer_nav list-reset">
              <li className="footer_nav__item">
                <Link href="/">
                  <a className="footer_nav__link">Home</a>
                </Link>
              </li>

              <li className="footer_nav__item">
                <Link href="/portfolio">
                  <a className="footer_nav__link">Portfolio</a>
                </Link>
              </li>

              <li className="footer_nav__item">
                <Link href="/blog">
                  <a className="footer_nav__link">Blog</a>
                </Link>
              </li>

              <li className="footer_nav__item">
                <Link href="/about">
                  <a className="footer_nav__link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
