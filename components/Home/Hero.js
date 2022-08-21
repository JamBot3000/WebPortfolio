import React, { useRef, useEffect } from "react";
import { init } from "ityped";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef?.current, {
      backDelay: 1000,
      showCursor: true,
      typeSpeed: 10,
      strings: ["Jamie Davies", "test"],
      placeholder: true,
    });
  }, []);

  return (
    <section className="c-hero animate">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="c-hero__inner">
              <div className="c-hero__left">
                <h1 className="c-hero__title">
                  Hello, I{"'"}m <span ref={textRef}></span>
                </h1>
                <div className="c-hero__description">
                  <p>
                    <strong>Coder</strong>, <strong>CyberSec Nerd</strong>, and{" "}
                    <strong>Drummer</strong> from Liverpool, UK. Right now I
                    {"'"}m working on a few personal projects to help me learn
                    Next.JS
                  </p>
                </div>

                <div className="c-hero__btn">
                  <a
                    className="cta-button c-button c-button--primary c-button--small"
                    href="#contact"
                  >
                    Get in touch
                  </a>
                  <a
                    className="works-button c-button c-button--secondary c-button--small"
                    href="#portfolio"
                  >
                    <span className="circle-bg">
                      <i className="ion ion-md-arrow-down button-arrow"></i>
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
