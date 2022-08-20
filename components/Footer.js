const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col col-12">
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

            <ul class="footer_nav list-reset">
              <li class="footer_nav__item">
                <a class="footer_nav__link" href="">
                  Home
                </a>
              </li>

              <li class="footer_nav__item">
                <a class="footer_nav__link" href="">
                  Portfolio
                </a>
              </li>

              <li class="footer_nav__item">
                <a class="footer_nav__link" href="">
                  Blog
                </a>
              </li>

              <li class="footer_nav__item">
                <a class="footer_nav__link" href="">
                  About
                </a>
              </li>
              <li class="footer_nav__item">
                <a class="footer_nav__link" href="">
                  Contact
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
