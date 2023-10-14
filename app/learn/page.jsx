import React from 'react'
import Loader from '@/components/system/icons/Loader'

export default function Learn() {
  return (
    <div className='w-full h-[calc(100vh-130px)] flex items-center justify-center'>
        <div className='flex flex-col gap-y-5 -mt-6'>
            <Loader />
            <h3 className='font-bold'>Building...</h3>
        </div>
        
    </div>
  )
}
