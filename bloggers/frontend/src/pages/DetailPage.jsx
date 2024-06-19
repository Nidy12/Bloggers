import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";

const DetailPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto mt-20 px-4 py-8 border">
      <div className="max-w-2xl mx-auto">
        <a href="#">
          <span className="flex items-center">
            <IoReturnUpBack fontSize={25} />
            <p className="ml-1">Back</p>
          </span>
        </a>

        <h1 className="text-4xl font-extrabold blog-title mt-4 mb-4">
          React-JS Full Course
        </h1>
        <span className="mb-4 flex items-center">
          <Link to="/blogs/edit/slug">
            <button
              type="button"
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              <FaRegPenToSquare className="mr-2 text-xl" /> edit
            </button>
          </Link>

          <button
            type="button"
            className="flex items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            onClick={handleShowModal}
          >
            <MdDelete className="mr-2 text-xl" /> Delete
          </button>
        </span>
        <div className="prose prose-lg blog-body text-justify">
          <p className="leading-8">
            React.js, developed by Facebook, is a popular JavaScript library
            used for building user interfaces, particularly single-page
            applications. It allows developers to create reusable UI components,
            promoting efficient and scalable code management. React follows a
            component-based architecture, where each component maintains its own
            state and renders independently, leading to more modular and
            maintainable code.
          </p>
          <p className="leading-8">
            A key feature of React is the virtual DOM (Document Object Model).
            Instead of directly manipulating the actual DOM, React creates a
            virtual representation of it. When the state of an object changes,
            React updates the virtual DOM first, which then efficiently updates
            the actual DOM, minimizing performance bottlenecks.
          </p>
          <p className="leading-8">
            React also employs JSX (JavaScript XML), a syntax extension that
            allows developers to write HTML-like code within JavaScript. This
            enhances readability and makes writing components more intuitive.
            Additionally, React hooks, introduced in version 16.8, enable state
            and side-effect management within functional components, making them
            more powerful and easier to manage compared to class components.
          </p>
          <p className="leading-8">
            React ecosystem is vast, with numerous libraries and tools enhancing
            its capabilities, such as Redux for state management and React
            Router for navigation. Its strong community support and integration
            with modern development practices make React a preferred choice for
            building dynamic and responsive web applications.
          </p>
        </div>
      </div>

      <Modal showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default DetailPage;
