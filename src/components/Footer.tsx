import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import bee from '../assets/bee-footer.svg'


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  const icons = [
    {ic: <FontAwesomeIcon icon={faFacebookF} />},
    {ic: <FontAwesomeIcon icon={faInstagram} />},
    {ic: <FontAwesomeIcon icon={faTwitter} />},
  ];
    return (
    <div className='flex flex-col gap-8 py-24 pb-12  items-center justify-center'>
        {/* Icons */}
        <div className="flex gap-5 ">
            {
                icons.map((icon) => (
                    <div className=' text-main-white bg-main-brown trans hover:bg-sec-brown cursor-pointer  w-10 h-10 rounded-full flex items-center justify-center'>{icon.ic}</div>
                ))
            }
        </div>
        <img src={bee} className="w-12" alt="" />
        <p className=" text-sec-black max-[350px]:text-sm"> &copy; {year} <span className="text-main-brown">Mahmoud Amin</span> All Rights Reserved</p>
    </div>
  )
}

export default Footer;