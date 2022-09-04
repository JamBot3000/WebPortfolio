import Link from "next/link";
import Image from "next/image";

const Card = ({ imageLink, postLink, title, description, tags }) => {
  let tagBoxes = [];

  for (let i = 0; i < tags.length; i += 3) {
    //* Splits tags into groups of 3s (can have remainders)
    var tagSet = tags.slice(i, i + 3);
    tagBoxes.push(tagSet);
  }

  return (
    <div className="c-blog-card col col-4 col-d-6 col-t-12">
      <Link href={postLink}>
        <div className="c-blog-card__inner">
          <a className="c-blog-card__image">
            <img loading="lazy" src={imageLink} />
          </a>

          <div className="c-blog-card__content">
            {tagBoxes.map((box) => (
              <div className="c-blog-card__tags-box" key={box}>
                {box.map((tag) => (
                  <a className="c-blog-card__tag" key={tag}>
                    <Image height="35px" width="110px" src={tag}></Image>
                  </a>
                ))}
              </div>
            ))}

            <h2 className="c-blog-card__title">
              <a href="">{title}</a>
            </h2>

            <p className="c-blog-card__excerpt">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
