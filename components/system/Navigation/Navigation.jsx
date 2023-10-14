"use client"

import React from 'react'
import { TopNavigation } from './TopNavigation';
import { LeftNavigation } from './LeftNavigation';
import { BottomNavigation } from './BottomNavigation';


export const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    return (
     <>
        <nav className='sticky top-0 z-40'>
            <TopNavigation toggle={toggle} />
            {/* <LeftNavigation open={open} toggle={toggle}/> */}
            <BottomNavigation />
        </nav>

     </>

    )
}

export default Navigation;