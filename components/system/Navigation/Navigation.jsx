"use client"

import React from 'react'
import { TopNavigation } from './TopNavigation';
import { LeftNavigation } from './LeftNavigation';


export const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    return (
     <>
        <nav>
            <TopNavigation toggle={toggle} />
            <LeftNavigation open={open} toggle={toggle}/>
        </nav>

     </>

    )
}

export default Navigation;