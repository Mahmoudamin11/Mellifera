import honey from '../assets/newsletterIMG.svg';
import TypesOfHoney from './TypesOfHoney';

const NewsLetter = () => {
  return ( // pad contain in large screens
    <div className="bg-newsletterAndTypes bg-cover  min-[1290px]:bg-contain bg-left space-up flex flex-col  w-full max-md:px-10 md:px-36 xl:px-48">
        <div className='flex flex-col lg:flex-row gap-5 justify-between items-center w-full'>
            <img src={honey} alt="" className='w-[75%] md:w-[70%] lg:w-[45%]' />
            <article className='w-full lg:w-[45%] flex flex-col gap-5 h-full text-center  lg:text-left relative justify-center'>
                <h1 className='secTitle'>Newsletter sign <br className='max-md:hidden' />up</h1>
                <p className=' text-sec-black '>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem dolores.</p>
                <div className='flex justify-center lg:justify-start xl:justify-between'>
                    <input type="text" name="" className='w-[65%] xl:w-[80%] p-2 outline-none border-[1px] border-solid bg-main-white text-sec-brown border-sec-black' placeholder='Email Address' id="" />
                    <button className='px-4 py-2 text-sm text-main-white bg-main-brown trans hover:bg-sec-brown'>Subscribe</button>
                </div>
            </article>
        </div>
        <TypesOfHoney />
    </div>
  )
}

export default NewsLetter