import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/errorpage";
import Aboutme from "./pages/Aboutme.jsx";
import Home from "./pages/Home";
import Logout from "./pages/Logout.jsx";
import Projects from "./pages/Projects.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Logout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "aboutme",
                element: <Aboutme />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "projects",
                element: <Projects />,
            }
        ]
    }
])