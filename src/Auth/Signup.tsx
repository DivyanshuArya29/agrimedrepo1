import React from 'react'

function Signup() {
  return (
    <div className='relative w-screen h-screen'>
        <div className='absolute top-0 left-2 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-69.1% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
        <div className='absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-20% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
        <div className='m-10 pt-5 items-center '>
            <h1 className='mx-20 pb-10 text-3xl font-bold font-[Poppins]'>CREATE A FREE ACCOUNT</h1>
            <form className='flex justify-center p-5 w-full items-start justify-between rounded-lgq'>
                <div className=' justify-center items-center align-center'>
                    <div>
                        <h3 className='text-2xl text-black mb-0.5 font-semibold font-[Poppins]' >Enter your username</h3>
                        <input className='w-full text-sm py-1 px-2 rounded outline-none border-[1px] bg-transparent' type="text" placeholder='' />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-2 mb-0.5 font-semibold font-[Poppins]'>Enter your email</h3>
                        <input className='w-full text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent' type="email" />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-2 mb-0.5 font-semibold font-[Poppins]'>Create your password</h3>
                        <input className='w-full text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent' type="password" placeholder='' />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-2 mb-0.5 font-semibold font-[Poppins]'>Confirm your password</h3>
                        <input className='w-full text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent' type="password" placeholder='' />
                    </div>
                    <div className=' mt-5 text-center'>
                        <h4 className='text-sm' >Passwords must contain at least</h4>
                    </div>
                    <div className=' text-center my-2 px-5 flex flex-wrap gap-3 w-5/5 text-sm'>
                        <h4>One digit and/or a symbol</h4>
                        <h4> One uppercase character</h4>
                        <h4>8 characters</h4>
                    </div>
                    <div className='my-10 items-start'>
                        <button className='text-white bg-emerald-500 py-3 hover:bg-emerald-600 px-10 rounded mt-4 w-full' > SignUp</button>
                    </div>
                </div>

            </form>
            <div>

            </div>
        </div>
    </div>
  );
};
export default Signup;