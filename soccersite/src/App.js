import logo from "./logo.svg";
import "./App.css";
import Homepg from "./components/pages/Homepg";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepg></Homepg>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
