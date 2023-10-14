


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {MdNewspaper,MdHome,MdPerson,MdSettings,MdOutlineMenuBook} from 'react-icons/md'

export const BottomNavigation = ({open,toggle}) => {
  const pathname = usePathname()


  return (
    <div className={`flex items-center bg-primary p-2 pt-3 w-full  fixed z-100 bottom-0 sm:hidden transition-all`}>
     
        <div className='w-full px-6 flex justify-between'>

            <Link href='/learn'>
            <div className='flex flex-col justify-between items-center'>
                <div className={`p-2 px-5  rounded-full ${pathname=='/learn' ? "bg-secondary":""}`}>
                    <MdOutlineMenuBook className='scale-125' color='white' />
                </div>
                <div className='font-bold text-white'>Learn</div>
            </div>
            </Link>

            <Link href='/'>
                <div className='flex flex-col justify-between items-center '>
                    <div className={`p-2 px-5  rounded-full ${pathname=='/' ? "bg-secondary":""}`}>
                        <MdHome className='scale-125' color='white' />
                    </div>
                    <div className='font-bold text-white'>Home</div>
                </div>
            </Link>

            <Link href='/account'>
                <div className='flex flex-col justify-between items-center'>
                    <div className={`p-2 px-5  rounded-full ${pathname=='/account' ? "bg-secondary":""}`}>
                        <MdPerson className='scale-125' color='white' />
                    </div>
                    <div className='font-bold text-white'>Account</div>
                </div>
            </Link>

            
        </div>    

    </div>
  )
}
