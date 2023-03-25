import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import SingleQuote from "./components/SingleQuote";
import Layout from "./Layout";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Main />
        },
        {
            path: 'saved-quotes',
            element: <h1>Saved Quotes</h1>
        },
        {
            path: 'saved-quotes/:id',
            element: <SingleQuote />
        }
    ]
}])