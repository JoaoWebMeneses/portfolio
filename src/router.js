import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/errorpage";
import Aboutme from "./pages/Aboutme.jsx";
import Home from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "aboutme",
                element: <Aboutme />,
            }
        ]
    }
])