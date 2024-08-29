import React, { useEffect, useState } from 'react'
import { useRoutes, Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import LayoutContainer from '../Layout/Layout'
import { adminRoutes } from './protected/ProtectedRoutes'
import { selectCurrentPermission } from '../features/auth/authSlice'
import { publicPages, appPages } from './public/PublicRoutes'
import { useSelector } from "react-redux"
import RequireAuth from '../features/auth/RequireAuth'
import { Permissions } from '../features/auth/authSlice'
import { getUser } from '../functions/helpers'

const MainRouter = () => {
    const permissions: Permissions | null = useSelector(selectCurrentPermission)
    const protectedPages = adminRoutes;
    const user = getUser();
    

    // adminRoutes.filter((page)=>{
    //     if(permissions?.includes(page?.requiredPermission)){
    //         return true ;
    //     }
    //     return false ;
    // })
 
    useEffect(()=>{
        // setProtectedPages( );
    },[])
    return (
        <Router>
            <Routes>
                {
                    appPages.map(({ path, element }, index) => (
                        <Route path={path} element={element} key={index} />
                    ))
                }
                <Route element={<RequireAuth isRequired={false} />}>
                    {
                        publicPages.map(({ path, element }, index) => (
                            <Route path={path} element={element} key={index} />
                        ))
                    }
                </Route>
                <Route element={<RequireAuth isRequired={true} />}>
                    <Route element={<LayoutContainer />}>
                        {
                            protectedPages?.map(({ path, element }, index) => (
                                <Route path={path} element={element} key={index} />
                            ))
                        }
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default MainRouter