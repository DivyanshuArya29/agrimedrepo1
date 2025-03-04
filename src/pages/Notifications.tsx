import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gradiant from '@/components/Gradient';

const Notifications = () =>{
    return(
        <>
        <Navbar />
        <div className='relative w-screen h-screen bg-[#eae4e4]'>
        {/* <div className='absolute top-0 left-2 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-69.1% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
        <div className='absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-20% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div> */}
        <div className='bg-green-400 mx-10'>
            <h1 className='mx-20 pb-10 text-5xl font-bold p-10'>Notifications</h1>
            <div className='bg-blue-400 flex flex-col items-center'>
                <div className='bg-yellow-200 w-3/5 flex items-center my-5'>
                    <img className="ml-5 w-[95px] h-[106px]" src="https://placehold.co/95x106" />
                    <div className='m-5'>
                        <h2 className='bg-red-300 text-3xl font-semibold mb-5'>Appointment cancelled</h2>
                        <p className='bg-purple-300 '>You have successfully canceled your appointment with Dr. Khushdeep Sharma on February 24, 2025</p>
                    </div>
                </div>
                <div className='bg-yellow-200 w-3/5 flex items-center my-5'>
                    <img className="ml-5 w-[90px] h-[90px]" src="https://placehold.co/90x90" /> 
                    <div className='m-5'>
                        <h2 className='bg-red-300 text-3xl font-semibold mb-5'>Reports updated</h2>
                        <p className='bg-purple-300 '>You have successfully updated your health reports folder on February 24, 2025</p>
                    </div>
                </div>
                <div className='bg-yellow-200 w-3/5 flex items-center my-5'>
                    <img className="ml-5 w-[105px] h-[115px]" src="https://placehold.co/105x115" /> 
                    <div className='m-5'>
                        <h2 className='bg-red-300 text-3xl font-semibold mb-5'>Appointment booked</h2>
                        <p className='bg-purple-300 '>You have successfully booked your appointment with Dr. Khushdeep Sharma on February 20, 2025</p>
                    </div>
                </div>
                <div className='bg-yellow-200 w-3/5 flex items-center my-5'>
                    <img className="ml-5 w-[98px] h-[108px]" src="https://placehold.co/98x108" /> 
                    <div className='m-5'>
                        <h2 className='bg-red-300 text-3xl font-semibold mb-5'>New features available</h2>
                        <p className='bg-purple-300 '>You can now add your emergency info to your health card bt selecting 'Health Card' option from side menu bar</p>
                    </div>
                </div>
                <div className='bg-yellow-200 w-3/5 flex items-center my-5'>
                    <img className="ml-5 w-[98px] h-[98px]" src="https://placehold.co/98x98" /> 
                    <div className='m-5'>
                        <h2 className='bg-red-300 text-3xl font-semibold mb-5'>Account setup successful</h2>
                        <p className='bg-purple-300 '>Your account setup was successful. You can experience our services.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    );
};

export default Notifications;