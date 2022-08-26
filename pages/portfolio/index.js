export default function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="c-page-heading">
          <h1 className="c-page-heading__title">Software Portfolio</h1>
          <p className="c-page-heading__description">
            * Note that these aren't all of my projects, just a few I think are
            worth talking about :)
          </p>
        </div>
      </div>

      <div className="container animate">
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
                  This site combines a wide variety of tech, such as NextJS, the
                  Twilio API, and more. Read to checkout my development process
                  :)
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
                  This site combines a wide variety of tech, such as NextJS, the
                  Twilio API, and more. Read to checkout my development process
                  :)
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
                  This site combines a wide variety of tech, such as NextJS, the
                  Twilio API, and more. Read to checkout my development process
                  :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="pagination">
        <div className="container">
          <div className="pagination__inner">
            <div className="pagination__list">
              <span className="pagination__prev disabled">
                <i className="ion ion-ios-arrow-back"></i>
                Prev
              </span>

              <div className="pagination__count">Page 1 of 1</div>

              <a className="pagination__next">
                Next
                <i className="ion ion-ios-arrow-forward"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
