import BlogCard from "./BlogCard";

const BlogContainer = () => {
  return (
    <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </div>
  );
};

export default BlogContainer;
