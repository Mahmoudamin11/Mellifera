import Navbar from './Navbar';

import chat from '../assets/Chat_Icon.svg';
import { useState } from 'react';

const HomeScreen = () => {
  
  return (
    // max-[1290px]:bg-[65%_0%] max-[1135px]:bg-half
    <div className='max-md:px-10 md:px-36 xl:px-48 bg-home bg-cover bg-no-repeat bg-fixed bg-top max-[1290px]:bg-[0%_-150%] max-[1250px]:bg-[0%_-550%] max-[1200px]:bg-center   relative'>
        <Navbar />
        
          <div className={'pb-64 min-[440px]:mt-32 max-[440px]:mt-20 max-[400px]:mt-36 relative p-0 flex flex-col justify-start max-[770px]:-translate-y-10 max-[550px]:gap-7'}>
              <p className='font-bold absolute top-1 w-full max-[550px]:-top-5 left-0 text-main-brown uppercase  z-10 tracking-[0.3em] max-[410px]:tracking-[0.1em]'>Fresh & Sweet as honey</p>
              <h1 className=' text-main-black text-[120px] max-[1020px]:text-[110px] max-[550px]:-ml-2 max-[565px]:text-[90px] max-[565px]:leading-[85px] uppercase font-bold relative   leading-[120px] -ml-3 z-20 my-0'>honey <span className='block'>bee</span></h1>
              <p className='w-[40%] -translate-y-1/3 max-[550px]:translate-y-0 text-sec-black relative z-10 max-[1285px]:w-1/2 max-[550px]:w-[65%] max-[400px]:w-[75%] max-[1100px]:text-sm max-[970px]:text-xs max-[530px]:text-[16px] max-[530px]:leading-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, nisi excepturi? Molestias, a architecto beatae dignissimos dolorem iure at delectus quod laboriosam! Sapiente sunt architecto ea, consectetur sequi illo mollitia!</p>
              <button className='trans px-4 py-2 text-white uppercase font-bold bg-main-brown w-fit hover:bg-sec-brown text-sm max-[1025px]:-mt-5 max-[550px]:mt-0'>view more</button>
          </div>
        
        <button className=' absolute bottom-24 max-[400px]:bottom-48 right-8 trans hover:opacity-70 bg-main-red  px-3 py-2 rounded-full flex text-white'> <img src={chat} alt="" className='mr-2' /> Chat</button>
    </div>
  )
}

export default HomeScreen