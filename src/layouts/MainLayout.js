import React  from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            CardHeader
            <Outlet />
            CardFooter
        </div>
    )
}

export default MainLayout
