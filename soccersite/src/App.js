import "./App.css";
import Homepg from "./components/pages/Homepg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./components/pages/Games";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepg></Homepg>,
    },
    {
      path: "/Games",
      element: <Games></Games>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
