import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Gradiant from './Gradient';
import Footer from './Footer';
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';

const Navbar2 = () =>{
    return(
        <>
        <div className='rounded-xl items-center flex bg-green-400 w-full'>
            <Image className=" p-5 " 
            src="/agrimed.png"
            width={94} height={102} 
            alt="logo" />
            <h1 className='bg-blue-400 text-3xl font-semibold text-white'>Hello User !</h1>
            <input className='' />
        </div>
        </>
        
    );
};

export default Navbar2;