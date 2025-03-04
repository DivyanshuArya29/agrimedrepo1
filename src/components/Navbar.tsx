import Image from 'next/image';
import Link from 'next/link';
const Navbar = () =>{
    return(
        <nav className=' bg-[#6F6B6B] p-4'>
            <div className='container mx-auto  flex justify-between items-center'>
                {/*Logo Section*/}
                <div className='flex items-center'>
                    <Image src="/logo.png" alt="app logo" width={40} height={40} />
                    <span className= 'text-white text-[24] font-semibold ml-2'>Agri Med</span>
                </div>
                {/*Navigation Links*/}
                <div className='flex space-x-6 '>
                    <Link href="/about" className='text-white hover:underline'>About</Link>
                    <Link href="/privacy" className='text-white hover:underline'>Privacy Policies</Link>
                    <Link href="/contact" className='text-white hover:underline'>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;