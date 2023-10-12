"use client"

import 'overlayscrollbars/overlayscrollbars.css';
import { 
  OverlayScrollbars, 
  ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin 
} from 'overlayscrollbars'

import {useEffect} from 'react'

export const Scrollbar = ({elem}) => {

    useEffect(() => {
        const osInstance = OverlayScrollbars(document.querySelector(elem), {});
    }, [])

    return (
        <></>
    )
}




