import React from 'react'

function Login() {
  return (
    <div className='justify-center relative w-screen h-screen '>
        <div className="p-5 mx-10 w-[1366px] h-[822px] relative">
            <div className='absolute top-0 left-2 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-69.1% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
            <div className='absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-20% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
            <div className=' m-15 text-center flex justify-center gap-20'>
                <img className='p-10 w-[192px] h-[213px] rounded-full' src='//Users/divyanshu/Downloads/Google-2.png' />
                <img className='p-10 w-[192px] h-[213px] rounded-full' src='//Users/divyanshu/Downloads/Google-2.png' />
                <img className='p-10 w-[192px] h-[213px] rounded-full' src='//Users/divyanshu/Downloads/Google-2.png' />
            </div>
            <div className='mx-30 px-30 justify-center flex flex-col  text-center'>
                <h2 className='text-2xl text-start font-medium'>Enter your email</h2>
                <input className=' text-xl pl-5 pr-150 border-1 outline-none text-decoration:underline; ' placeholder='example@gmail.com'></input>
            </div>
            <div className='m-10  text-center'>
                <button className='text-white bg-black rounded-xl text-xl px-5 py-3'>Login</button>
            </div>
            <div className='m-10  text-center'>
                <button className='text-white bg-black rounded-xl text-xl px-5 py-3'>Create new account</button>
            </div>
            <div className='m-10 text-center'>
                <h4>By signing in you agree to our Terms of Service and Privacy Policy.</h4>
            </div>

        </div>
    </div>
  );
};

export default Login; 