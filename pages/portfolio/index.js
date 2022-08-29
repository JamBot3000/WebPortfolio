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
            imageLink="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
            postLink=""
            title="This Site"
            description="This site combines a wide variety of tech, such as NextJS, the Twilio API, and more. Read to checkout my development process :)"
            tags={[
              "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
              "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
              "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            ]}
          />

          <Card
            imageLink="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
            postLink=""
            title="This Site"
            description="This site combines a wide variety of tech, such as NextJS, the Twilio API, and more. Read to checkout my development process :)"
            tags={[
              "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
              "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
              "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            ]}
          />

          <Card
            imageLink="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
            postLink=""
            title="This Site"
            description="This site combines a wide variety of tech, such as NextJS, the Twilio API, and more. Read to checkout my development process :)"
            tags={[
              "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
              "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
              "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
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
