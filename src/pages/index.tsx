import React, { useState, useEffect } from "react";
import axios from "axios";
import { ActivityIndicator } from "../components/ActivityIndicator/ActivityIndicator";
import styles from "../styles/BlogTop.module.css";
import Layout from "../components/Layout/Layout";
import { PostType } from "../models/PostType";
import Card from "../components/Card/Card";
import HeadSection from "../components/HeadSection/HeadSection";
import CardLatest from "../components/CardLatest/CardLatest";
import Category from "../components/Category/Category";
const baseURL = "https://blog-api-gilt.vercel.app/api";

export default function BlogTop() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [updatedPosts, setUpdatedPosts] = useState<PostType[]>([]);
  const latestPost = updatedPosts[0];
  const morePosts = updatedPosts.slice(1);

  const filterCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const newPosts = posts.filter((e) => e.category == selectedCategory);
    setUpdatedPosts(newPosts);
    if (selectedCategory == "all") {
      setUpdatedPosts(posts);
    }
  }, [posts, selectedCategory]);

  useEffect(() => {
    (async () => {
      try {
        //get posts returned from the endpoint `/posts`
        const response = await axios.get(`${baseURL}/posts`);
        setPosts(response.data);
        setSelectedCategory("all");
      } catch (err) {
        console.error("get posts error", err);
      }
      try {
        //get categories returned from the endpoint `/categories`
        const response = await axios.get(`${baseURL}/categories`);
        setCategories(response.data);
      } catch (err) {
        console.error("get categories error", err);
      }
      //await wait(1);
      setIsLoading(false);
    })();
  }, []);

  //This code is for testing of loading indicator
  // function wait(seconds: number) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("");
  //     }, seconds * 1000);
  //   });
  // }

  if (isLoading) return <ActivityIndicator />;
  return (
    <Layout>
      <>
        <HeadSection />
        <div className={styles.container}>
          {latestPost && <CardLatest latestPost={latestPost} />}
          {categories && <Category categories={categories} filterCategory={filterCategory} />}
          {morePosts && <Card morePosts={morePosts} />}
        </div>
      </>
    </Layout>
  );
}
