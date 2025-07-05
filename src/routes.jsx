import { createBrowserRouter } from "react-router-dom";





import Login from "./Pages/Shared/Login/Login";

import ErrorPage from "./Pages/Shared/Errorpage";
import Layout from "./Layout";
import Signup from "./Pages/Shared/Signup/Signup";
import Home from "./Pages/HomePage/Home";
import CondoInfoForm from "./Pages/CondoInfoForm/CondoInfoForm";
import InformationForm from "./Pages/InformationFinalView/InformationFinalView";
import PlanSelection from "./Pages/PlanSelection/PlanSelection";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <>
       <ErrorPage/>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/condoinfoform",
        element: <CondoInfoForm/>,
      },
      {
        path: "/information",
        element: <InformationForm/>,
      },
      {
        path: "/plan",
        element: <PlanSelection/>,
      },
     
     
      
     

        ],
      },



      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },

     
]);
export default router;
