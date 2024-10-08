import { Link } from "react-router-dom";
import { ArticleType as ArticleProps } from "src/utils/types/article";
import { generateArticleSlug } from "src/utils/helpers/generateSlug";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArticleViewCard: React.FC<ArticleProps> = ({
  id,
  title,
  description,
  tags,
  postImage,
  author,
  publishedAt,
}) => {
  return (
    <div className="flex flex-col rounded-sm">
      <Link
        className="image-wrapper relative"
        to={`${generateArticleSlug(title, author, id)}`}
      >
        <LazyLoadImage
          src={postImage}
          alt="Tech Article"
          effect="blur"
          className="h-[220px] sm:h-[360px] md:h-[220px] w-[100%] rounded-sm"
        />
      </Link>
      <div className="flex flex-col justify-between dark:bg-black-faded bg-white shadow-sm py-2 px-4 h-[100%]">
        <div>
          <Link to={`${generateArticleSlug(title, author, id)}`}>
            <h4 className="md:text-xl text-brand font-medium line-clamp-1">
              {title}
            </h4>
          </Link>
          <p className="text-sm text-gray-400 my-2 line-clamp-4 h-[80px]">
            {description}
          </p>
          <span className="text-gray-400 dark:text-neutral-500 font-medium text-sm">
            Tags: {tags.join(", ")}
          </span>
        </div>
        <div className="flex items-center my-2">
          <LazyLoadImage
            src={author.profileUrl}
            alt="Author"
            effect="blur"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="dark:text-neutral-200 text-neutral-600 text-sm">
            <Link className="hover:underline" to={`/user/${author.username}`}>
              {author.name}
            </Link>{" "}
            on {publishedAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleViewCard;
