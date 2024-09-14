import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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
    <main className="w-full min-h-screen p-8 bg-black text-white">
      <h1 className="text-9xl p-8">Pagination</h1>
      <Posts posts={posts} loading={loading} />
    </main>
  );
}

export default App;
