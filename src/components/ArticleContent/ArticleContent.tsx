import React from "react";
import { ArticleDescriptionType as ArticleDescriptionProps } from "src/utils/types/article";

const ArticleContent: React.FC<ArticleDescriptionProps> = ({ sections }) => {
  return (
    <div className="article-content mt-8 border-b dark:border-black-faded">
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-600 dark:text-grey-faded">
            {section.title}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-grey-faded text-xl">
            {section.content}
          </p>
          {section.image && (
            <img
              src={section.image.url}
              alt={section.image.alt}
              className="mt-4"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleContent;
