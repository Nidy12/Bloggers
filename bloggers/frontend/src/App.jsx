import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import HomePage from "./pages/HomePage";
import AddBlogPage from "./pages/AddBlogPage";
import PageNotFound from "./pages/PageNotFound";
import DetailPage from "./pages/DetailPage";
import EditBlogPage from "./pages/EditBlogPage";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const createBlog = (data) => {
    axios
      .post("http://127.0.0.1:8000/blogs/", data) // Correct the endpoint here
      .then((res) => {
        console.log(res.data);
        toast.success("Blog added successfully!");
      })
      .catch((err) => console.log(err.message));
  };

  const updateBlog = (data, slug) => {
    axios
      .put(`http://127.0.0.1:8000/blogs/${slug}/`, data)
      .then((res) => {
        toast.success("Blog updated successfully!");
      })
      .catch((err) => console.log(err.message));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route
          path="/add-blog"
          element={<AddBlogPage createBlog={createBlog} />}
        />
        <Route path="/blogs/:slug" element={<DetailPage />} />
        <Route
          path="blogs/edit/:slug"
          element={<EditBlogPage updateBlog={updateBlog} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
