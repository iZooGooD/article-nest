import { Link } from "react-router-dom";
import Button from "src/components/Common/_ux/Button/Button";
interface ArticleAuthorInfoProps {
  name: string;
  username: string;
  profileUrl: string;
  bio: string;
  metaData: {
    followers: number;
    following: number;
  };
}

const ArticleAuthorInfo: React.FC<ArticleAuthorInfoProps> = ({
  name,
  username,
  profileUrl,
  bio,
  metaData,
}) => {
  return (
    <div className="author-header p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-md mt-4">
      <h4 className="about-author-text text-3xl font-bold mb-6 text-neutral-600 dark:text-grey-faded">
        About the author
      </h4>
      <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
        <Link to={`/${username}`}>
          <img
            src={profileUrl}
            alt={name}
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </Link>
        <div>
          <Link to={`/${username}`}>
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-gray-200">
              {name}
            </h2>
          </Link>
          <p className="text-lg text-neutral-600 dark:text-gray-400">{bio}</p>
          <div className="author-meta-data flex items-center gap-8 mt-4">
            <p className="text-sm text-neutral-800 dark:text-gray-400">
              <strong>{metaData.followers}</strong> Followers
            </p>
            <p className="text-sm text-neutral-800 dark:text-gray-400">
              <strong>{metaData.following}</strong> Following
            </p>
          </div>
        </div>
        <div className="ml-auto">
          <Button text="Follow" size="s" type="primary" />
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthorInfo;
