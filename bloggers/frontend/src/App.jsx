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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
        <Route path="/blogs/slug" element={<DetailPage />} />
        <Route path="blogs/edit/slug" element={<EditBlogPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
