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
                    A colletion of some of my software related projects.{" "}
                    <span>This site is still in progress</span> however I intend
                    to create posts for each of these projects and more, that
                    detail the tech stack chosen and any problems/note-worthy
                    occurances
                  </p>
                </div>
              </div>

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
                  tags={[
                    "/projects/tags/jekyll.svg",
                    "/projects/tags/ruby.svg",
                  ]}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
