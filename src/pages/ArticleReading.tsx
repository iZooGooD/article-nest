import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "src/components/Layout/Layout";
import { API } from "src/services/api";

const ArticleReading: React.FC = () => {
  const { username, slug } = useParams();

  useEffect(() => {
    const fetchArticle = async (slug: string) => {
      const article = await API.getArticleDetails(slug);
      console.log(article);
    };

    const fetchAuthorProfileDetails = async (id: string) => {
      const profile = await API.getProfileDetails(id);
      console.log(profile);
    };

    if (slug) {
      fetchArticle(slug);
    }
  }, [slug]);

  return (
    <Layout>
      <div>
        <h1>Article Reading</h1>
        <p>Welcome to the article reading page.</p>
        <p>User ID: {username}</p>
      </div>
    </Layout>
  );
};

export default ArticleReading;
