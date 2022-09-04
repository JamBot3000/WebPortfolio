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
            description="This site combines a wide variety of tech, such as NextJS, the Twilio API, and more. Read to checkout my development process :)"
            tags={[
              "/projects/tags/next.svg",
              "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
              "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            ]}
          />

          <Card
            imageLink="/projects/blog.png"
            postLink=""
            title="Personal Blog"
            description="This github-pages site was made using the static site generator jekyll - it allows for markdown to HTML conversion resulting in a pleasant creator experience."
            tags={[
              "https://img.shields.io/badge/jekyll-%232b2b2b.svg?style=for-the-badge&logo=jekyll&logoColor=%23cc0808",
              "https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white",
            ]}
          />

          <Card
            imageLink="/projects/blog.png"
            postLink=""
            title="Personal Blog"
            description="This github-pages site was made using the static site generator jekyll - it allows for markdown to HTML conversion resulting in a pleasant creator experience."
            tags={[
              "https://img.shields.io/badge/jekyll-%232b2b2b.svg?style=for-the-badge&logo=jekyll&logoColor=%23cc0808",
              "https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white",
            ]}
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
