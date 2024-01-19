import worker from '../assets/our mission.png';
import sign from '../assets/signature.svg';
import arrow from '../assets/arrow.svg';
import wArrow from '../assets/white_arrow.svg';
import { useState } from 'react';

const News = () => {

  // 830
  const [translate, setTranslate] = useState(0);
  // window.addEventListener('resize', () => { 
  //   setWidth(window.innerWidth);
  // });
  
  const handleClick = () => { 
    if (translate == 0) { 
      setTranslate(1);
    }
    else { 
      setTranslate(0);
    }
  };
  const news = [
    {date: '14 jan 2024', heading: 'Sweet Honey Packs Fresh Raw and Unfiltered', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia des.'},
    {date: '13 jan 2024', heading: 'Raw Bee Honey Products And Beekeeping', body: 'Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia des null.'},
    {date: '12 jan 2024', heading: 'Bees – Honey Bees and Beekeeping Online Guide', body: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint sunt in culpa qui officia des cupidatat non.'},
  ];
  return (
    <div className='relative overflow-x-hidden max-md:px-10 md:px-36 xl:px-48 mt-16 grid grid-cols-2 max-[830px]:grid-cols-1 gap-12 max-[855px]:gap-5 max-[855px]:grid-cols-[1fr_55%]'>
        
        <div className={'flex flex-col gap-5 max-[830px]:hidden'}>
            <div className='relative'>
                <img src={worker} alt="" className='' />
                <div className=' absolute top-1/2 left-1/2 w-16 h-16 max-[855px]:w-12 max-[855px]:h-12 p-2 bg-main-white text-main-brown rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer trans hover:opacity-90 '><img src={arrow} alt="" className='w-3' /></div>
            </div>
            
            <h3 className='text-main-black text-2xl font-bold uppercase'>Our mission</h3>
            <p className='text-sec-black max-[855px]:text-sm'>The bees live as they naturally would and their benefits reach more people. Our goal is to raise  <span className='font-bold text-main-black'>San Diego’s bee population</span> throughout the city and at the same time <span className='font-bold text-main-black'>spread awareness among the community</span>.</p>
            <p className='text-sec-black max-[855px]:text-sm'>Our hope is that these backyard hives will facilitate a dialogue among neighbours, friends, family and the community at large about the huge importance of bees.</p>
            <img src={sign} className='w-28' alt="" />
        </div>
        
        <div className={translate == 0 ? 'flex flex-col gap-5 min-[830px]:hidden' : '-translate-x-[200%] hidden'}>
            <div className='relative'>
                <img src={worker} alt="" className='' />
                <div className=' absolute top-1/2 left-1/2 w-16 h-16 max-[855px]:w-12 max-[855px]:h-12 p-2 bg-main-white text-main-brown rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer trans hover:opacity-90 '><img src={arrow} alt="" className='w-3' /></div>
            </div>
            
            <h3 className='text-main-black text-2xl font-bold uppercase'>Our mission</h3>
            <p className='text-sec-black max-[855px]:text-sm'>The bees live as they naturally would and their benefits reach more people. Our goal is to raise  <span className='font-bold text-main-black'>San Diego’s bee population</span> throughout the city and at the same time <span className='font-bold text-main-black'>spread awareness among the community</span>.</p>
            <p className='text-sec-black max-[855px]:text-sm'>Our hope is that these backyard hives will facilitate a dialogue among neighbours, friends, family and the community at large about the huge importance of bees.</p>
            <img src={sign} className='w-28' alt="" />
        </div>

        {<div className={translate == 0 ? 'bg-white min-[830px]:hidden  max-[830px]:translate-x-[200%] max-[830px]:hidden p-5 flex flex-col gap-8 max-[1290px]:gap-5 max-[440px]:gap-4' : 'bg-white min-[830px]:hidden  max-[830px]:translate-x-0 p-5 flex flex-col gap-8 max-[1290px]:gap-5 max-[440px]:gap-4'}>
          <h1 className='secTitle'>News</h1>
          { 
            news.map((peice) => (
              <div className='flex flex-col gap-2 max-[1290px]:gap-1'>
                <span className='text-sm max-[440px]:text-xs text-main-brown font-bold uppercase'>{peice.date}</span>
                <h3 className='font-bold text-xl text-main-black uppercase max-[530px]:text-[15px] max-[440px]:text-[14px] max-[530px]:leading-tight'>{peice.heading}</h3>
                <p className='text-sec-black text-sm max-[530px]:text-xs'>{peice.body}</p>
              </div>
            ))
          }

          <span className=' uppercase text-main-brown font-bold trans hover:text-sec-brown cursor-pointer'>Show more news</span>

        </div>}

        <div className={'bg-white  max-[830px]:hidden p-5 flex flex-col gap-8 max-[1290px]:gap-5'}>
          <h1 className='secTitle'>News</h1>
          { 
            news.map((peice) => (
              <div className='flex flex-col gap-2 max-[1290px]:gap-1'>
                <span className='text-sm text-main-brown font-bold uppercase'>{peice.date}</span>
                <h3 className='font-bold text-xl text-main-black uppercase max-[1290px]:text-lg max-[880px]:leading-tight max-[920px]:text-[16px]'>{peice.heading}</h3>
                <p className='text-sec-black text-sm max-[1075px]:text-xs'>{peice.body}</p>
              </div>
            ))
          }

          <span className=' uppercase text-main-brown font-bold trans hover:text-sec-brown cursor-pointer'>Show more news</span>

        </div>
        
        <button onClick={() => handleClick()} className={translate == 0 ? ' min-[830px]:hidden absolute w-14 h-14 flex items-center justify-center bg-main-brown trans hover:opacity-80 cursor-pointer top-1/2  max-md:right-3 right-12 -translate-y-1/2 p-2 rounded-full max-[585px]:w-10 max-[585px]:h-10': ' min-[830px]:hidden absolute w-14 h-14 flex items-center justify-center bg-main-brown trans hover:opacity-80 cursor-pointer top-1/2   rotate-180 left-12 max-md:left-3  -translate-y-1/2 p-2 rounded-full max-[585px]:w-10 max-[585px]:h-10'}><img src={wArrow} alt="" className='w-3' /></button>
    </div>
  )
}

export default News