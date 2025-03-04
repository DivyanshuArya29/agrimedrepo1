import Image from 'next/image';

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md flex justify-around items-center py-2'>
      <button className='flex flex-col items-center  bg-[#00C98D] rounded-full'><Image src='/home.png' alt='HOME' width={45} height={45}/></button>
      <button className='flex flex-col items-center'><Image src='/reports.png' alt='Reports' width={65} height={65}/></button>
      <button className='flex flex-col justify-center items-center bg-red-600 text-white rounded-full w-[55px] h-[55px]'>S.O.S</button>
      <button className='flex flex-col items-center'><Image src='/schedule.png' alt='Schedule' width={35} height={35}/></button>
      <button className='flex flex-col items-center'><Image src='/history.png' alt='Calendar' width={35} height={40}/></button>
    </footer>
  )
}

export default Footer;