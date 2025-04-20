import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogsContainer = () => {
  // State to store the fetched blog posts
  const [posts, setPosts] = useState([]);
  // State to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once on mount

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render blog posts
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginTop: "10px",
      }}
    >
      {posts.length === 0 ? (
        <div>No posts available</div>
      ) : (
        posts.map((post) => (
          <BlogCard
            key={post.token}
            token={post.token}
            title={post.title}
            content={post.content}
          />
        ))
      )}
    </div>
  );
};

export default BlogsContainer;