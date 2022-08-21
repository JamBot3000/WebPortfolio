const Projects = () => {
  return (
    <section className="section projects" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="contaniner__inner animate">
              <div className="section__info">
                <div className="section__head">
                  <h2 className="section__title">My Projects</h2>
                  <a className="section__link" href="blog.html">
                    View all{" "}
                    <i
                      className="ion ion-md-arrow-forward"
                      style={{ color: "black" + "!important" }}
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
                      <a
                        className="c-blog-card__image"
                        href="blog/that-which-does-not-kill-us-makes-us-stronger.html"
                      >
                        <img
                          alt="That which does not kill us makes us stronger"
                          data-cms-original-src="/images/post-1.jpg"
                          loading="lazy"
                          src="images/post-1e6ba.jpg?_cchid=244c465237f65c19df0810b494cbfebf"
                        />
                      </a>
                    </div>

                    <div className="c-blog-card__content">
                      <div className="c-blog-card__tags-box">
                        <a className="c-blog-card__tag" href="tag/travel.html">
                          travel
                        </a>

                        <a
                          className="c-blog-card__tag"
                          href="tag/lifestyle.html"
                        >
                          lifestyle
                        </a>
                      </div>

                      <h2 className="c-blog-card__title">
                        <a href="blog/that-which-does-not-kill-us-makes-us-stronger.html">
                          That which does not kill us makes us stronger
                        </a>
                      </h2>

                      <p className="c-blog-card__excerpt">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going
                        forward.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="c-blog-card col col-4 col-d-6 col-t-12">
                  <div className="c-blog-card__inner">
                    <div className="c-blog-card__image-wrap">
                      <a
                        className="c-blog-card__image"
                        href="blog/do-what-you-can-with-what-you-have-where-you-are.html"
                      >
                        <img
                          alt="Do what you can, with what you have, where you are"
                          data-cms-original-src="/images/post-2.jpg"
                          loading="lazy"
                          src="images/post-2dc98.jpg?_cchid=835eaaa1997fa78211cb91482513a9e8"
                        />
                      </a>
                    </div>

                    <div className="c-blog-card__content">
                      <div className="c-blog-card__tags-box">
                        <a className="c-blog-card__tag" href="tag/life.html">
                          life
                        </a>

                        <a className="c-blog-card__tag" href="tag/story.html">
                          story
                        </a>
                      </div>

                      <h2 className="c-blog-card__title">
                        <a href="blog/do-what-you-can-with-what-you-have-where-you-are.html">
                          Do what you can, with what you have, where you are
                        </a>
                      </h2>

                      <p className="c-blog-card__excerpt">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going
                        forward.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="c-blog-card col col-4 col-d-6 col-t-12">
                  <div className="c-blog-card__inner">
                    <div className="c-blog-card__image-wrap">
                      <a
                        className="c-blog-card__image"
                        href="blog/strive-not-to-be-a-success-but-rather-to-be-of-value.html"
                      >
                        <img
                          alt="Strive not to be a success, but rather to be of value"
                          data-cms-original-src="/images/post-3.jpg"
                          loading="lazy"
                          src="images/post-3518f.jpg?_cchid=9983d484ace4b8f310239f1d7065bca6"
                        />
                      </a>
                    </div>

                    <div className="c-blog-card__content">
                      <div className="c-blog-card__tags-box">
                        <a className="c-blog-card__tag" href="tag/life.html">
                          life
                        </a>

                        <a className="c-blog-card__tag" href="tag/notes.html">
                          notes
                        </a>
                      </div>

                      <h2 className="c-blog-card__title">
                        <a href="blog/strive-not-to-be-a-success-but-rather-to-be-of-value.html">
                          Strive not to be a success, but rather to be of value
                        </a>
                      </h2>

                      <p className="c-blog-card__excerpt">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going
                        forward.
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
