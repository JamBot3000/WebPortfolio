import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDropDown = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <header className="c-header">
      <div className="container">
        <div className="row">
          <div className="c-header__inner">
            <div className="logo">
              <a className="logo__link" href="">
                {" "}
                JamBot 3000{" "}
              </a>
            </div>

            {/* for mobile add is-open class */}
            <nav className={isActive ? "main-nav is-open" : "main-nav"}>
              <div className="main-nav__box">
                <div onClick={handleDropDown} className="nav__icon-close">
                  <i className="ion ion-md-close"></i>
                </div>

                <div className="nav__title">Menu</div>

                <ul className="nav__list list-reset">
                  <li className="nav__item">
                    <a className="nav__link active-link" href="">
                      Home
                    </a>
                  </li>

                  <li className="nav__item">
                    <a className="nav__link" href="">
                      Portfolio
                    </a>
                  </li>

                  <li className="nav__item">
                    <a className="nav__link" href="">
                      Blog
                    </a>
                  </li>

                  <li className="nav__item">
                    <a className="nav__link" href="">
                      About
                    </a>
                  </li>

                  <li className="nav__item">
                    <a className="nav__link" href="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

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
            </nav>

            <div className="nav-button">
              <i
                onClick={handleDropDown}
                className="nav__icon nav__icon-menu ion ion-md-menu"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
