import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
const List = ({lst}:any) => {
  return (
    <ul className={lst == 1 ? 'w-full absolute transform translate-y-[125%] max-[822px]:px-2 max-[490px]:text-sm max-[440px]:text-xs trans bg-main-red left-0 flex justify-between h-14 items-center   -mt-6 -z-10' : 'trans transform absolute max-[490px]:text-sm max-[440px]:text-xs w-full flex items-center justify-between -translate-y-1/2 bg-main-red h-14 opacity-0 -z-10'}>
        <li className=' text-main-white font-bold trans mx-5 max-[822px]:mx-0 hover:text-sec-brown cursor-pointer'>Home</li>
            <li className=' text-main-white opacity-75 trans mx-5 max-[822px]:mx-0 hover:text-sec-brown cursor-pointer'>Pages</li>
            <li className=' text-main-white opacity-75 trans mx-5 max-[822px]:mx-0 hover:text-sec-brown cursor-pointer'>Products</li>
            <li className=' text-main-white opacity-75 trans mx-5 max-[822px]:mx-0 hover:text-sec-brown cursor-pointer'>Blogs</li>
            <li className=' text-main-white opacity-75 trans mx-5 max-[822px]:mx-0 hover:text-sec-brown cursor-pointer'>Portfolio</li>
            <li className=' text-main-white opacity-75 trans mx-5 max-[822px]:mx-0 hover:text-sec-brown cursor-pointer relative before:absolute before:w-3 before:-right-1 before:top-0 before:h-3 before:flex before:items-center before:justify-center  before:text-xs before:p-2 before:rounded-full before:bg-honey before:content-["0"] before:text-main-white'><FontAwesomeIcon icon={faBasketShopping} size='lg' /></li>
            
    </ul>
  )
}

export default List;