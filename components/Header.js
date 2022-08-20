import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDropDown = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <header class="c-header">
      <div class="container">
        <div class="row">
          <div class="c-header__inner">
            <div class="logo">
              <a class="logo__link" href="/">
                {" "}
                JamBot 3000{" "}
              </a>
            </div>

            {/* for mobile add is-open class */}
            <nav className={isActive ? "main-nav is-open" : "main-nav"}>
              <div class="main-nav__box">
                <div onClick={handleDropDown} class="nav__icon-close">
                  <i class="ion ion-md-close"></i>
                </div>

                <div class="nav__title">Menu</div>

                <ul class="nav__list list-reset">
                  <li class="nav__item">
                    <a class="nav__link active-link" href="/">
                      Home
                    </a>
                  </li>

                  <li class="nav__item">
                    <a class="nav__link" href="">
                      Portfolio
                    </a>
                  </li>

                  <li class="nav__item">
                    <a class="nav__link" href="">
                      Blog
                    </a>
                  </li>

                  <li class="nav__item">
                    <a class="nav__link" href="">
                      About
                    </a>
                  </li>

                  <li class="nav__item">
                    <a class="nav__link" href="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div class="social">
                <ul class="social__list list-reset">
                  <li class="social__item">
                    <a
                      aria-label="instagram icon"
                      class="social__link"
                      href="https://instagram.com/"
                      rel="noopener"
                      target="_blank"
                    >
                      <i class="ion ion-logo-instagram"></i>
                    </a>
                  </li>

                  <li class="social__item">
                    <a
                      aria-label="github icon"
                      class="social__link"
                      href="https://github.com"
                      rel="noopener"
                      target="_blank"
                    >
                      <i class="ion ion-logo-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div class="nav-button">
              <i
                onClick={handleDropDown}
                class="nav__icon nav__icon-menu ion ion-md-menu"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
