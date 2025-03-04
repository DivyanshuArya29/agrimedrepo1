import React from 'react'
import Image from "next/image";

function HealthCard() {
  return (
    <div className=' relative w-screen h-screen bg-[#eae4e4] overflow-hidden'>
        {/* <div className='absolute top-0 left-2 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-69.1% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
        <div className='absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-20% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div> */}
        <div className='mx-20 my-10 justify-between'>
            <div className='px-3 py-5 justify-center w-[649px] h-[647px] bg-[#f14d42] rounded-[100px]'>
                <div className='items-center flex flex-wrap justify-center' >
                    <h1 className=' p-5 text-3xl text-white font-semibold'>HEALTH CARD</h1>
                    <div data-svg-wrapper>
                        <svg className='mt-0' width="100" height="100" viewBox="0 0 159 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g style={{ mixBlendMode: 'multiply' }}>
                                <path d="M79.5395 0V75.065M148 37.5L79.5395 75.065M79.5395 75.065L148 112.5M79.5395 75.065L79.5 150M79.5395 75.065L11 112.5M79.5395 75.065L11 37.5" stroke="#DC1B21" stroke-width="45"/>
                            </g>
                        </svg>
                    </div>
                </div>


                {/* <div className='flex px-10 py-5 h-4/5 bg-white rounded-[100px]'>

                    <div className='flex flex-col justify-evenly items-center bg-green-400'>
                        <img className=" w-28 h-[113px]" src="https://placehold.co/112x113" />
                        <img className=" w-[50px] h-[50px]" src="https://placehold.co/50x50" />
                        <img className=" w-[70px] h-[70px]" src="https://placehold.co/70x70" />
                        <img className=" w-[50px] h-[50px]" src="https://placehold.co/50x50" />
                        <img className=" w-[50px] h-[50px]" src="https://placehold.co/50x50" />
                        <img className=" w-[50px] h-[50px]" src="https://placehold.co/50x50" />
                    </div>
                    <div className='w-full '>
                        <div className='px-5 bg-blue-400 w-full py-3'>
                            <h2 className='text-[#f14d42] text-xl font-semibold'>Name</h2>
                            <h3>User</h3>
                        </div>
                        <div className='px-5 bg-blue-400 w-full py-3'>
                            <h2 className='text-[#f14d42] text-xl font-semibold'>Blood type</h2>
                            <h3>O+</h3>
                        </div>
                        <div className='px-5 bg-blue-400 w-full py-3'>
                            <h2 className='text-[#f14d42] text-xl font-semibold'>Allergies</h2>
                            <h3>...</h3>
                        </div>
                        <div className='px-5 bg-blue-400 w-full py-3'>
                            <h2 className='text-[#f14d42] text-xl font-semibold'>Medications</h2>
                            <h3>...</h3>
                        </div>
                        <div className='px-5 bg-blue-400 w-full py-3'>
                            <h2 className='text-[#f14d42] text-xl font-semibold'>Address</h2>
                            <h3>...</h3>
                        </div>
                        <div className='px-5 bg-blue-400 w-full py-2'>
                            <h2 className='text-[#f14d42] text-xl font-semibold'>Medical Notes</h2>
                            <h3>...</h3>
                        </div>
                    </div>
                </div> */}





                <div className='px-10 py-5 h-4/5 bg-white rounded-[100px]'>
                    <div className='bg-green-400 items-center flex'>
                        <img className=" p-4 w-28 h-[113px]" src="https://placehold.co/112x113" />
                        <div className=' mx-10 px-5  bg-blue-400 w-full text-red'>
                            <h2 className='text-xl font-semibold'>Name</h2>
                            <h3>User</h3>
                        </div>
                    </div>
                    <div className='bg-green-400 items-center flex'>
                        <img className="p-4 w-[50px] h-[50px]" src="./bloodtype.png" />
                        <div className='flex flex-col justify-end ml-10 px-5 bg-blue-400 w-full text-red'>
                            <h2 className='text-xl font-semibold'>Blood type</h2>
                            <h3>O+</h3>
                        </div>
                    </div>
                    <div className='bg-green-400 items-center flex'>
                        <img className=" p-4 w-[70px] h-[70px]" src="https://placehold.co/70x70" />
                        <div className='px-5 bg-blue-400 w-full text-red'>
                            <h2 className='text-xl font-semibold'>Allergies</h2>
                            <h3>...</h3>
                        </div>
                    </div>
                    <div className='bg-green-400 items-center flex'>
                        <img className="p-4 w-[50px] h-[50px]" src="https://placehold.co/50x50" />
                        <div className='px-5 bg-blue-400 w-full text-red'>
                            <h2 className='text-xl font-semibold'>Medications</h2>
                            <h3>...</h3>
                        </div>
                    </div>
                    <div className='bg-green-400 items-center flex'>
                        <img className="w-[50px] h-[50px]" src="https://placehold.co/50x50" />
                        <div className='px-5 bg-blue-400 w-full text-red'>
                            <h2 className='text-xl font-semibold'>Address</h2>
                            <h3>...</h3>
                        </div>
                    </div>
                    <div className='bg-green-400 items-center flex'>
                        <img className="w-[50px] h-[50px]" src="https://placehold.co/50x50" />
                        <div className='px-5 bg-blue-400 w-full text-red'>
                            <h2 className='text-xl font-semibold'>Medical Notes</h2>
                            <h3>...</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HealthCard; 