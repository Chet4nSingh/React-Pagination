import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <main className="w-full min-h-screen px-8 pb-8 bg-black text-white">
      <h1 className="text-9xl mb-16 pt-8">Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
    </main>
  );
}

export default App;
