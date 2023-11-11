import { useRouteError } from "react-router-dom";
import "../pages/errorpage.css"

export default function ErrorPage() {
    const error = useRouteError();
    console.log("O erro é:", error);

    return(
        <div id="error-page">
            <h1>ERROR!</h1>
            <p>An error has occurred!</p>
            <p>Return to the page!</p>
        </div>
    )
}