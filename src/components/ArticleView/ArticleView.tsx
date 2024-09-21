import React from "react";

const ArticleView: React.FC = () => {
  return (
    <div>
      <div className="image-wrapper relative">
        <img
          src="https://images.prismic.io/turing/652ebb53fbd9a45bcec817f4_shutterstock_1628424196_11zon_406aa47d57.webp?auto=format,compress"
          alt="Tech Article"
        />
      </div>
      <div className="dark:bg-black-faded bg-white shadow-sm rounded-md py-8 px-4">
        <div>
          <h4 className="md:text-xl text-brand font-medium">
            Learn the AI vs ML in minutes
          </h4>
          <p className="text-sm text-gray-400 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            quibusdam accusantium nihil, dicta numquam nostrum ut adipisci
            repudiandae sed officia facere at nam quo ipsum labore incidunt
            eaque. Voluptatibus, alias!
          </p>
        </div>
        <div className="article-footer my-2">
          <div>
            <span>Author</span>
            <span>date</span>
          </div>
          <div>
            <span>Read time</span>
            <span>likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
