import Card from "../../components/Portfolio/Card";

export default function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="c-page-heading">
          <h1 className="c-page-heading__title">Software Portfolio</h1>
          <p className="c-page-heading__description">
            * Note that these aren{"'"}t all of my projects, just a few I think
            are worth talking about :)
          </p>
        </div>
      </div>

      <div className="container animate">
        <div className="row">
          <Card
            imageLink="/projects/portfolio.png"
            postLink=""
            title="This Site"
            description="This project has been an excellent learning experience for me - being my first live Next.JS project that makes use of Vercel, and multiple external APIs"
            tags={[
              "/projects/tags/next.svg",
              "/projects/tags/vercel.svg",
              "/projects/tags/react.svg",
            ]}
          />

          <Card
            imageLink="/projects/blog.png"
            postLink=""
            title="Personal Blog"
            description="This github-pages site was made using the static site generator jekyll - it allows for markdown to HTML conversion resulting in a pleasant creator experience."
            tags={["/projects/tags/jekyll.svg", "/projects/tags/ruby.svg"]}
          />

          <Card
            imageLink="/projects/discord-bot.jpg"
            postLink=""
            title="Community Discord Bot"
            description="I contributed features to this open source project including reddit API integrations & UKMT Challenge features"
            tags={["/projects/tags/python.svg"]}
          />
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

              <a className="pagination__next disabled">
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
