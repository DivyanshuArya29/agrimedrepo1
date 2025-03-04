import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

function Feedback() {
  return (
    <>
    <Navbar />
    <div className='relative w-screen h-screen bg-[#eae4e4] overflow-hidden'>
        <div className=' p-10 w-screen h-screen flex flex-col items-center '>
            <h1 className=' my-10 text-5xl font-semibold'>TYPE YOUR FEEDBACK HERE !</h1>
            <div className=' w-3/5 flex flex-col items-center'>
                <textarea className=' w-full h-80 text-sm rounded outline-none border-[1px]' name="" id="" col="30" row="10"></textarea>
                <button className='text-xl text-white w-2/5 rounded-2xl mx-10 mt-7 bg-emerald-500 py-3 px-5 hover:bg-emerald-600' >Submit Feedback</button>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Feedback;