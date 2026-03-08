import { createBrowserRouter } from "react-router-dom";
import  RootLayout  from "../layouts/RootLayout";


import Home from "../pages/Home";
import Contacto from "../pages/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
       /* {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      }, */
    {
        path: "contacto",
        element: <Contacto />,
      }, 
    ],
  },
]);
