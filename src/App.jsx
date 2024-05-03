import Home from "./components/Home";
import "./App.css";
import Userdetail from "./components/Userdetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
function App() {
  let [loading, setLoading] = useState(false);
  let[alert,setAlert]=useState({
    type:"",
    message:""
  });

  function showAlert({message,type}){
    setAlert({type,message});
    setTimeout(()=>{
      setAlert("")
    },1500)
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home loading={loading}  setLoading={setLoading} alert={alert} showAlert={showAlert}/>
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
