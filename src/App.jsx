import Home from "./components/Home";
import "./App.css";
import Userdetail from "./components/Userdetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

function App() {
  let [loading, setLoading] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home loading={loading}  setLoading={setLoading}/>,
    },
    {
      path: "/:username",
      element: <Userdetail loading={loading}  setLoading={setLoading}/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
