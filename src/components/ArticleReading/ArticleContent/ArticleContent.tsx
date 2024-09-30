import { SectionType } from "src/utils/types/article";

interface ArticleContentProps {
  title: string;
  publishedAt: string;
  readTime: number;
  sections: SectionType[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  publishedAt,
  readTime,
  sections,
}) => {
  return (
    <div>
      <div className="article-header">
        <h1 className="text-5xl font-bold text-neutral-600 dark:text-grey-faded">
          {title}
        </h1>
        <p className="dark:text-gray-400 text-neutral-600 mt-2">
          {publishedAt} • {readTime} min read
        </p>
      </div>
      <div className="article-content mt-8 border-b dark:border-black-faded">
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-semibold text-neutral-600 dark:text-grey-faded">
              {}
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
    </div>
  );
};

export default ArticleContent;
