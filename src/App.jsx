import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import { DashBoard } from "./DashBoard/DashBoard";
import { SideBar } from "./SideBar/SideBar";


export const App=()=>{
  const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            // {
            //     path: "/",
            //     element: <DashBoard /> 
            // },
            {
                path:"/sidebar",
                element:<SideBar/>
            }            
           
        ]
    }
]);

return <RouterProvider router={router} />;
};