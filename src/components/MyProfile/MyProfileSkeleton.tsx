import React from "react";
import Layout from "src/components/Common/Layout/Layout";

const MyProfileSkeleton: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[75vh] px-4">
        <div className="my-profile-container max-w-5xl mx-auto my-10 p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-lg">
          <div className="profile-header flex flex-col items-center md:flex-row gap-8">
            <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
            <div>
              <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
              <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          </div>

          <div className="profile-tabs mt-8">
            <div className="flex justify-center gap-6 border-b-2 border-gray-300">
              <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
              <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
            </div>

            <div className="personal-info-tab mt-6">
              <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
              <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
              <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProfileSkeleton;
