import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  //* to handle "active-link" class for links
  const pathName = useRouter().pathname;

  //* to handle mobile dropdown
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
                    <Link href="/">
                      <a
                        className={
                          pathName == "/" || pathName.includes("/#")
                            ? "nav__link active-link"
                            : "nav__link"
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link href="/portfolio">
                      <a
                        className={
                          pathName.includes("/portfolio")
                            ? "nav__link active-link"
                            : "nav__link"
                        }
                      >
                        Portfolio
                      </a>
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link href="https://jambot3000.github.io/">
                      <a
                        target="_blank"
                        className={
                          pathName.includes("/blog")
                            ? "nav__link active-link"
                            : "nav__link"
                        }
                      >
                        Blog
                      </a>
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link href="/about">
                      <a
                        className={
                          pathName.includes("/about")
                            ? "nav__link active-link"
                            : "nav__link"
                        }
                      >
                        About
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

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
