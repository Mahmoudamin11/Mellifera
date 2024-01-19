import g1 from '../assets/gallery/g1.svg';
import g2 from '../assets/gallery/g2.svg';
import g3 from '../assets/gallery/g3.svg';
import g4 from '../assets/gallery/g4.svg';
import g5 from '../assets/gallery/g5.svg';
import g6 from '../assets/gallery/g6.svg';
const OurGallery = () => {
    const Imgs = [
        {img : g1},
        {img : g2},
        {img : g3},
        {img : g4},
        {img : g5},
        {img : g6},
    ]
    return (
        <div className='mt-16 '>
            <div className='flex flex-col gap-5 items-center'>
                <h1 className='secTitle m-0'>Our Gallery</h1>
                <p className='text-center text-sec-black mb-3'>Mellifera is a true beehive of activity! Check out the latest news and events in our image gallery and see for yourself.</p>
                {/* IMAGES */}
                <div className='grid grid-cols-3 max-lg:grid-cols-2 gap-5 '>
                    {
                        Imgs.map((img, index)=> (
                            <img src={img.img} alt="" className={index == 0 || index == 3 ? ' max-[450px]:col-span-2' : ''} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurGallery