import { createHashRouter } from "react-router-dom";
import Main from "./components/Main";
import SingleQuote from "./components/SingleQuote";
import Layout from "./Layout";
import App from "./components/App";
import UserGreeting from "./components/UserGreeting";
import SavedQuotes from "./components/SavedQuotes";

export const routes = createHashRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Main />
        },
        {
            path: 'saved-quotes',
            element: <SavedQuotes />
        },
        {
            path: 'saved-quotes/:id',
            element: <SingleQuote />
        },
        {
            path: '/users',
            element: <App />
        },
        {
            path: '/users/:name',
            element: <UserGreeting />
        }
    ]
}])