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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
