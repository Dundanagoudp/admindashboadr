import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import { SideBar } from "./SideBar/SideBar";
import { Dashboard } from "./components/DashBoard";


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
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            },            
           
        ]
    }
]);

return <RouterProvider router={router} />;
};