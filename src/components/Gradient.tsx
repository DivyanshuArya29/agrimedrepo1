import React from 'react'

function Gradiant() {
  return (
    <div className='gradiant-background relative w-screen h-screen bg-[#eae4e4] overflow-hidden'>
        <div className='absolute top-0 left-2 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-69.1% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
        <div className='absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-[#6EEFC86B] from-46% via-[#48C9D7B0] from-20% to-[#1C9DE8] opacity-50 blur-3xl rounded-full'></div>
    </div>
  );
};

export default Gradiant;