import React from "react";
import { ProfileType as ArticleAuthorInfoProps } from "src/utils/types/profile";

const ArticleAuthorInfo: React.FC<ArticleAuthorInfoProps> = ({
  name,
  profileUrl,
  socialLinks,
  bio,
  metaData,
}) => {
  return (
    <div className="mt-8 border  dark:border-black-faded rounded-lg p-3 md:p-8  shadow-lg">
      <h4 className="about-author-text text-3xl font-bold mb-6 text-neutral-600 dark:text-grey-faded">
        About the author
      </h4>
      <div className="flex items-center mb-6">
        <img
          src={profileUrl}
          alt={name}
          className="w-16 h-16 rounded-full shadow-md"
        />
        <div className="ml-6">
          <p className="text-xl font-semibold text-neutral-800 dark:text-gray-200">
            {name}
          </p>
          <p className="text-lg text-neutral-600 dark:text-gray-400">{bio}</p>
        </div>
      </div>
      <div className="flex items-center justify-between  p-6 rounded-lg shadow-md">
        <button className="bg-brand text-white py-2 px-6 rounded-full hover:bg-brand-dark transition duration-300 shadow-md">
          Follow
        </button>
        <div className="ml-8">
          <div className="flex items-center space-x-6">
            <p className=" text-neutral-600 dark:text-gray-400">
              <span className="font-semibold text-xl text-neutral-800 dark:text-gray-200">
                {metaData.followers}
              </span>{" "}
              Followers
            </p>
            <span className="text-neutral-400">•</span>
            <p className=" text-neutral-800 dark:text-gray-200">
              <span className="font-semibold text-xl">
                {metaData.following}
              </span>{" "}
              Following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthorInfo;
