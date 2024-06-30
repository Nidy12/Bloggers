import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import Spinner from "./Spinner";

const BlogContainer = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/blogs/recent")
      .then((res) => {
        console.log(res.data);
        setblogs(res.data);
        setloading(false);
      })

      .catch((err) => console.Console(err.message));
  }, []);
  return (
    <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
      <Spinner loading={loading} />
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogContainer;
