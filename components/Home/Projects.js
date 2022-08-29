import Card from "../Portfolio/Card";
import Link from "next/link";

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
                  <Link href="/portfolio" scroll={true}>
                    <a className="section__link">
                      View all{" "}
                      <i
                        className="ion ion-md-arrow-forward"
                        style={{ color: "black !important" }}
                      ></i>
                    </a>
                  </Link>
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
                <Card
                  imageLink="/projects/portfolio.png"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
