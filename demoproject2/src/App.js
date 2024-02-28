import "./App.css";
import Cardwrapper from "./components/Cardwrapper";
import Card from "./components/Card";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cardwrapper></Cardwrapper>,
    },
    {
      path: "/card",
      element: (
        <div>
          <Card name="john" title="doe"></Card>
          <Link to="/">back</Link>
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
