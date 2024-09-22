import React from "react";
import { ArticleType as ArticleProps } from "../../utils/types/article";

const ArticleWideView: React.FC<ArticleProps> = ({
  title,
  description,
  tags,
  postImage,
  author,
  publishedAt,
}) => {
  return (
    <div className="md:flex-row flex flex-row-reverse rounded-md  dark:bg-black-faded bg-white shadow-sm">
      <div className="h-[100%] md:h-[180px] md:w-[380px] image-wrapper flex items-center">
        <img
          src={postImage}
          alt="Tech Article"
          className="h-[100px] w-[220px]  md:h-[180px] md:w-[380px]"
        />
      </div>
      <div className="flex flex-col justify-between py-2 px-4 h-[100%] w-full">
        <div>
          <h4 className="md:text-xl text-brand font-medium">{title}</h4>
          <p className="text-sm text-gray-400 my-2">{description}</p>
          <span className="text-gray-400 dark:text-neutral-500 font-medium text-sm">
            Tags: {tags.join(", ")}
          </span>
        </div>
        <div className="flex items-center my-2">
          <img
            src={author.profileUrl}
            alt="Author"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="dark:text-neutral-200 text-neutral-600">
            {author.name} on {publishedAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleWideView;
