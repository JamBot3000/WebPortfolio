const Hero = () => {
  return (
    <section class="c-hero animate">
      <div class="container">
        <div class="row">
          <div class="col col-12">
            <div class="c-hero__inner">
              <div class="c-hero__left">
                <h1 class="c-hero__title">Hello, I'm Jamie Davies</h1>
                <div class="c-hero__description">
                  <p>
                    <strong>Coder</strong>, <strong>CyberSec Nerd</strong>, and{" "}
                    <strong>Drummer</strong> from Liverpool, UK. Currently
                    working on a few software development projects and learning
                    Next.js
                  </p>
                </div>

                <div class="c-hero__btn">
                  <a
                    class="cta-button c-button c-button--primary c-button--small"
                    href="#contact"
                  >
                    Get in touch
                  </a>
                  <a
                    class="works-button c-button c-button--secondary c-button--small"
                    href="#portfolio"
                  >
                    <span class="circle-bg">
                      <i class="ion ion-md-arrow-down button-arrow"></i>
                    </span>
                    Check out my projects
                  </a>
                </div>
              </div>

              {/* <div class="c-hero__right">
                <div class="c-hero__image">
                  <img
                    alt=""
                    data-cms-original-src="/images/01.jpg"
                    loading="lazy"
                    src="https://cdn.discordapp.com/attachments/984153596973174874/992900360958115860/unknown.png"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
