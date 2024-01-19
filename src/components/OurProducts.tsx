import p1 from '../assets/h1product1.jpg.svg';
import p2 from '../assets/h1product2.jpg.svg';
import p3 from '../assets/h1product3.jpg.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
const OurProducts = () => {
    const products = [
        {img: p1, header: 'Heather', price: '$10.00'},
        {img: p2, header: 'Jarrah', price: '$15.00'},
        {img: p3, header: 'Linden', price: '$20.00'},
    ]
    return (
        <div className='max-md:px-10 md:px-36 xl:px-48 space-up bg-products bg-cover max-[610px]:bg-right min-[1295px]:bg-contain'>
            <div className='flex flex-col gap-5 items-center'>
                <h1 className='secTitle text-center'>Our products</h1>
                <p className=' text-sec-black mb-3 text-center'>Check out our online shop for cute bee-themed apparel, unique bee suits, educational tools, gift certificates and more.</p>
                <div className='grid grid-cols-2 min-[610px]:grid-cols-3 justify-between'>
                    {
                        products.map((prod, index) => (
                            <div className={index == 1 ? 'flex flex-col gap-3 items-center justify-center new mt-[0.5px]' :'flex flex-col gap-3 items-center'}>

                                <img src={prod.img} alt="" />
                                <h3 className='text-[16px] min-[850px]:text-xl uppercase font-bold text-main-black text-center'>{prod.header} honey</h3>
                                <span className='text-sec-brown font-bold text-lg'>{prod.price}</span>
                                <p className='text-sec-black text-center text-xs min-[850px]:text-sm w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .</p>
                                
                                <div className='flex gap-2  cursor-pointer trans hover:opacity-75 mt-5 bg-main-brown px-4 py-2 text-main-white'>
                                    <FontAwesomeIcon icon={faBasketShopping} className=''  />
                                    <span className='uppercase font-bold text-xs mt-[2px]'>Add to cart</span>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurProducts