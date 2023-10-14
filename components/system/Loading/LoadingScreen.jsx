import Loader from '@/components/system/icons/Loader';
import React,{useEffect} from 'react'
import Backdrop from '../backdrop/backdrop';

export const LoadingScreen = () => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])
    
  return  <Backdrop><Loader/></Backdrop>
}
