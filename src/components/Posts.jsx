import React from "react";

function Posts({ posts, loading }) {
  if (loading) return <h1>Fetching data...</h1>;

  return (
    <ul className="p-8 flex flex-col gap-4">
      {posts.map((post) => {
        return <li key={post.id} className="border p-4 hover:scale-105 duration-75">{post.title}</li>;
      })}
    </ul>
  );
}

export default Posts;
