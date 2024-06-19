import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

const BlogContainer = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/blogs/recent")
      .then((res) => {
        console.log(res.data);
        setblogs(res.data);
      })

      .catch((err) => console.Console(err.message));
  }, []);
  return (
    <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogContainer;
