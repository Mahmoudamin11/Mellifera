import quote from '../assets/quote.svg';
import OurGallery from '../components/OurGallery';

const Quote = () => {
  return (
    <div className='max-md:px-10 md:px-36 xl:px-48  space-up bg-quote max-[570px]:bg-cover max-[570px]:bg-center bg-right'>
        <div className='flex max-[570px]:flex-col max-[570px]:gap-8 max-[570px]:justify-center max-[570px]:items-center gap-12'>
          <div>
              <img src={quote} alt="" />
          </div>
          <div className='flex flex-col max-[570px]:items-center gap-5 max-[830px]:gap-3 justify-center w-3/4'>
              <p className=' text-sec-black italic w-full max-[830px]:text-sm max-[570px]:text-[16px] max-[570px]:text-center max-[400px]:text-sm'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."</p>
              <span className=' text-main-black font-bold uppercase'>John Kyle</span>
              <span className='w-fit text-main-red uppercase text-sm font-bold cursor-pointer trans hover:text-sec-brown'>Biologist</span>
          </div>
        </div>
        <OurGallery />
    </div>
  )
}

export default Quote;