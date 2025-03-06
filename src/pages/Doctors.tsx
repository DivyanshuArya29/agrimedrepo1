import Navbar2 from '@/components/Navbar2';
import React from 'react'
import Image from 'next/image';
import Doctors_img from '@/components/images/doctor.png'
import Nihal from '@/components/images/nihal.png'

function Doctors() {
  return (
    <div className='gradiant-background relative w-screen h-screen overflow-hidden bg-[#eae4e4]'>
        <Navbar2 />
        <div className='flex flex-col items-center h-screen overflow-auto '>
            <div className="flex flex-wrap justify-center mx-10 my-5 p-4 w-200 bg-white rounded-xl">
                <div className=''>
                    <Image className="bg-blue-400 rounded-xl" 
                    src={Doctors_img}
                    width={130} 
                    alt="doctors_img" />
                </div>
                <div className='mx-2 w-150 px-3 '>
                    <h1 className='font-semibold text-2xl'>Dr.Khushdeep Sharma</h1>
                    <div className='px-5 my-2 '>
                        <h3>Dentist</h3>
                        <h3>XYZ Hospital, Ambala City</h3>
                    </div>
                    <div className='mt-5 text-end'>
                        <button className=' text-[#00C98D] px-1'>view more</button>
                    </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center mx-10 p-4 my-5 w-200 bg-white rounded-xl">
                <div className='w-[130px] '>
                    <Image className="bg-blue-400 rounded-xl" 
                    src={Nihal}
                    width={130} 
                    alt="doctors_img" />
                </div>
                <div className='mx-2 w-150 px-3 '>
                    <h1 className='font-semibold text-2xl'>Dr.Nihal Singh</h1>
                    <div className='px-5 my-2 '>
                        <h3>Physiotherapist</h3>
                        <h3>Venkateshwar Hospital, Dwarka</h3>
                    </div>
                    <div className='mt-5 text-end'>
                        <button className=' text-[#00C98D] px-1'>view more</button>
                    </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center mx-10 p-4 my-5 w-200 bg-white rounded-xl">
                <div className=''>
                    <Image className="bg-blue-400 rounded-xl" 
                    src={Doctors_img}
                    width={130} 
                    alt="doctors_img" />
                </div>
                <div className='mx-2 w-150 px-3 '>
                    <h1 className='font-semibold text-2xl'>Dr.Khushdeep Sharma</h1>
                    <div className='px-5 my-2 '>
                        <h3>Dentist</h3>
                        <h3>XYZ Hospital, Ambala City</h3>
                    </div>
                    <div className='mt-5 text-end'>
                        <button className=' text-[#00C98D] px-1'>view more</button>
                    </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center mx-10 p-4 my-5 w-200 bg-white rounded-xl">
                <div className=''>
                    <Image className="bg-blue-400 rounded-xl" 
                    src={Doctors_img}
                    width={130} 
                    alt="doctors_img" />
                </div>
                <div className='mx-2 w-150 px-3 '>
                    <h1 className='font-semibold text-2xl'>Dr.Khushdeep Sharma</h1>
                    <div className='px-5 my-2 '>
                        <h3>Dentist</h3>
                        <h3>XYZ Hospital, Ambala City</h3>
                    </div>
                    <div className='mt-5 text-end'>
                        <button className=' text-[#00C98D] px-1'>view more</button>
                    </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center mx-10 p-4 my-5 w-200 bg-white rounded-xl">
                <div className=''>
                    <Image className="bg-blue-400 rounded-xl" 
                    src={Doctors_img}
                    width={130} 
                    alt="doctors_img" />
                </div>
                <div className='mx-2 w-150 px-3 '>
                    <h1 className='font-semibold text-2xl'>Dr.Khushdeep Sharma</h1>
                    <div className='px-5 my-2 '>
                        <h3>Dentist</h3>
                        <h3>XYZ Hospital, Ambala City</h3>
                    </div>
                    <div className='mt-5 text-end'>
                        <button className=' text-[#00C98D] px-1'>view more</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Doctors;