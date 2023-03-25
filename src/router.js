import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "./components/Main";

export const routes = createBrowserRouter([{
    path: '/',
    element: <><h1 style={{textAlign: 'center'}}>Quotes - Login 360</h1><Outlet /></>,
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
            element: <h1>A quote will render here</h1>
        }
    ]
}])