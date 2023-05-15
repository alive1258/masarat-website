import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Main/Main";
import About from "../components/About/About";
import ProductService from "../components/ProductService/ProductService";
import PartnersTeam from "../components/PartnresTeam/PartnersTeam";
import ContactUs from "../components/ContactUs/ContactUs";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/',
        element:<Main></Main>,
        children:[
         {
            path:'about',
            element:<About></About>
         },
        {
            path:'productsService',
            element:<ProductService></ProductService>,
           
        },
     
      {
        path:'partnerteam',
        element:<PartnersTeam></PartnersTeam>
      },
      {
        path:'contact',
        element:<ContactUs></ContactUs>
      }
        ]
    }
])
export default router;