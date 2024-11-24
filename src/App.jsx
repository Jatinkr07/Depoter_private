import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./root/Root";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/Page7";

import BlogHome from "./pages/BlogHome";
import ScrollTop from "./hook/scrollTop";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import StorageService from "./pages/StorageService";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />
      <Route path="page4" element={<Page4 />} />
      <Route path="page5" element={<Page5 />} />
      <Route path="page6" element={<Page6 />} />
      <Route path="page7" element={<Page7 />} />
      <Route path="page8" element={<BlogHome />} />
      <Route path="/page9" element={<Page8 />} />
      <Route path="/page10" element={<Page9 />} />
      <Route path="/storage-service" element={<StorageService />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}>
      <ScrollTop />
    </RouterProvider>
  );
};

export default App;
