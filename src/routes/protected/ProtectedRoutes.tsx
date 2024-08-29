import type { RouteObject } from "react-router-dom";
import PublicInviationRegisteration from "../../pages/invitations/PublicInviationRegisteration";
import SeatsIndex from "../../pages/seats/SeatsIndex";
import GroupsIndex from "../../pages/groups/GroupsIndex";
import SurnamesIndex from "../../pages/surnames/SurnamesIndex";
import EmployeesIndex from "../../pages/employees/EmployeesIndex";
import PrivateInvitations from "../../pages/invitations/PrivateInvitations";
import PublicInvitations from "../../pages/invitations/PublicInvitations";
import AllInvitations from "../../pages/invitations/AllInvitations";
import Profile from "../../pages/profile/Profile";
import PrintInvitation from "../../pages/invitations/PrintInvitation";
import QRCodePage from "../../pages/QRCodePage";
import Reports from "../../pages/seats/Reports";


export const adminRoutes:RouteObject[] = [

    {
        path: '/',
        element: <> home </>,
    },
    {
        path:'/send-invitations',
        element:<PrivateInvitations/>
    },
    {
        path:'/public-invitations',
        element:<PublicInvitations/>
    },
    {
        path:'/surnames',
        element:<SurnamesIndex/>
    },
    {
        path:'/groups',
        element:<GroupsIndex/>
    },
    {
        path:'/profile',
        element:<Profile/>
    },
    {
        path:'/employees',
        element:<EmployeesIndex/>
    },


    // 2 drop down
    {
        path:'/all-invitations',
        element: <AllInvitations/>
    },
    {
        path:'/seats',
        element: <SeatsIndex></SeatsIndex>
    },
    {
        path:'/seats/report',
        element:<Reports></Reports>
    }
    ,
    {
        path:'/qr-code',
        element:<QRCodePage/>
    },
    {
        path:'/registeration-p',
        element:<PublicInviationRegisteration></PublicInviationRegisteration>
    },
    {
        path:'/print-badge/:id',
        element:<PrintInvitation/>
    }

   
];
