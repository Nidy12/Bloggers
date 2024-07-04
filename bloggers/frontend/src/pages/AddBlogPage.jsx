import { useState } from "react";

const AddBlogPage = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const newblog = {
    title: title,
    content: content,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newblog);
  };

  return (
    <div className="flex justify-center items-center h-screen mt-10 border-purple-900">
      <form
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl mb-4 text-center font-semibold">
          Add a New Blog
        </p>
        <div className="mb-8">
          <label
            htmlFor="input"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            id="input"
            onChange={(e) => settitle(e.target.value)}
            className="border-2 border-purple-900 rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your input"
            required
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="textarea"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="textarea"
            onChange={(e) => setcontent(e.target.value)}
            className="border-2 border-purple-900 rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPage;
