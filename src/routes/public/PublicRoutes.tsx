import type { RouteObject } from "react-router-dom";
import Login from "../../pages/login/Login";
// import Register from "../../pages/register/Register";
import NotFound404Page from "../../pages/systemPages/NotFound404/NotFound404Page";
import PublicInviationRegisteration from "../../pages/invitations/PublicInviationRegisteration";


export const publicPages:RouteObject[] = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <></>
    },
    {
        path:'/email',
        children:[
            {
                path:'/verify',
                element:<></>
            },
            {
                path:'/forget-password',
                element:<></>
            }
        ]
    },
    {
        path:'/registeration',
        element:<PublicInviationRegisteration></PublicInviationRegisteration>
    }
];
export const appPages:RouteObject[] = [
    {
        path:'*',
        element:<NotFound404Page/>
    }
]