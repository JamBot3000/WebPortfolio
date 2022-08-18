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
                    aria-label="twitter icon"
                    class="social__link"
                    href="https://twitter.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    <i class="ion ion-logo-twitter"></i>
                  </a>
                </li>

                <li class="social__item">
                  <a
                    aria-label="github icon"
                    class="social__link"
                    href="https://github.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    <i class="ion ion-logo-github"></i>
                  </a>
                </li>

                <li class="social__item">
                  <a
                    aria-label="pinterest icon"
                    class="social__link"
                    href="https://pinterest.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    <i class="ion ion-logo-pinterest"></i>
                  </a>
                </li>

                <li class="social__item">
                  <a
                    aria-label="youtube icon"
                    class="social__link"
                    href="https://youtube.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    <i class="ion ion-logo-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <ul class="footer_nav list-reset">
              <li class="footer_nav__item">
                <a class="footer_nav__link" href="index.html">
                  Home
                </a>
              </li>

              <li class="footer_nav__item">
                <a class="footer_nav__link" href="projects/index.html">
                  Projects
                </a>
              </li>

              <li class="footer_nav__item">
                <a class="footer_nav__link" href="about/index.html">
                  About
                </a>
              </li>

              <li class="footer_nav__item">
                <a class="footer_nav__link" href="blog/index.html">
                  Blog
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
