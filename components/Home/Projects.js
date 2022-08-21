const Projects = () => {
  return (
    <section className="section projects" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="contaniner__inner animate">
              <div className="section__info">
                <div className="section__head">
                  <h2 className="section__title">My Portfolio</h2>
                  <a className="section__link" href="blog.html">
                    View all{" "}
                    <i
                      className="ion ion-md-arrow-forward"
                      style={{ color: "black !important" }}
                    ></i>
                  </a>
                </div>
                <div className="section__description">
                  <p>
                    A colletion of some of my software related projects. All of
                    these projects are <strong>open source</strong>, so feel
                    free to check them out and maybe even contribute
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="c-blog-card col col-4 col-d-6 col-t-12">
                  <div className="c-blog-card__inner">
                    <div className="c-blog-card__image-wrap">
                      <a className="c-blog-card__image" href="">
                        <img
                          loading="lazy"
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
                        />
                      </a>
                    </div>

                    <div className="c-blog-card__content">
                      <div className="c-blog-card__tags-box">
                        <a className="c-blog-card__tag">NextJS</a>

                        <a className="c-blog-card__tag">Web</a>
                      </div>

                      <h2 className="c-blog-card__title">
                        <a href="">This Site :)</a>
                      </h2>

                      <p className="c-blog-card__excerpt">
                        This site combines a wide variety of tech, such as
                        NextJS, the Twilio API, and more. Read to checkout my
                        development process :)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="c-blog-card col col-4 col-d-6 col-t-12">
                  <div className="c-blog-card__inner">
                    <div className="c-blog-card__image-wrap">
                      <a className="c-blog-card__image" href="">
                        <img
                          loading="lazy"
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
                        />
                      </a>
                    </div>

                    <div className="c-blog-card__content">
                      <div className="c-blog-card__tags-box">
                        <a className="c-blog-card__tag">NextJS</a>

                        <a className="c-blog-card__tag">Web</a>
                      </div>

                      <h2 className="c-blog-card__title">
                        <a href="">This Site :)</a>
                      </h2>

                      <p className="c-blog-card__excerpt">
                        This site combines a wide variety of tech, such as
                        NextJS, the Twilio API, and more. Read to checkout my
                        development process :)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="c-blog-card col col-4 col-d-6 col-t-12">
                  <div className="c-blog-card__inner">
                    <div className="c-blog-card__image-wrap">
                      <a className="c-blog-card__image" href="">
                        <img
                          loading="lazy"
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
                        />
                      </a>
                    </div>

                    <div className="c-blog-card__content">
                      <div className="c-blog-card__tags-box">
                        <a className="c-blog-card__tag">NextJS</a>

                        <a className="c-blog-card__tag">Web</a>
                      </div>

                      <h2 className="c-blog-card__title">
                        <a href="">This Site :)</a>
                      </h2>

                      <p className="c-blog-card__excerpt">
                        This site combines a wide variety of tech, such as
                        NextJS, the Twilio API, and more. Read to checkout my
                        development process :)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
