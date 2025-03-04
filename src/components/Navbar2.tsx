import React from 'react'
import Image from 'next/image';
import Logo from '@/components/images/agrimed.png'
import Location_icon from '@/components/images/location.png'
import Notification_icon from '@/components/images/notification.png'


import Link from 'next/link';
import Navbar from './Navbar';
import Gradiant from './Gradient';
import Footer from './Footer';

const Navbar2 = () =>{
    return(
        <>
            <div className='m-5 h-[70px] rounded-xl items-center flex bg-[#00C98D]'>
            
            <Image className="mt-7" 
            src={Logo}
            // width={94} height={102}
            width={130} 
            alt="logo" />
            
            <h1 className=' text-3xl font-semibold text-white'>Hello User !</h1>
            
            <div className='justify-center px-5 mx-5 w-3/5'>
                <input className='outline-none w-4/5 w-full px-5 rounded-xl bg-white h-10' type='searchbar' placeholder='Search' />
            </div>

            <Image className="p-5"
            src={Location_icon}
            width={80}
            alt="location" />

            <Image className="p-5"
            src={Notification_icon}
            width={80}
            alt="location" />

            </div>
        </>
        
    );
};

export default Navbar2;