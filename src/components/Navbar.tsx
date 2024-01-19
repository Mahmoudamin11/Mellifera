import logo from '../assets/New-logo-png1.png.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import List from './List';
import { useState } from 'react';
const Navbar = ({sendList}:any) => {
    const [list, setList] = useState(0);
    const showList = () => { 
        if (list == 0)
            setList(1);
        else 
            setList(0);
    }
    const callParent = () => { 
        return list ;
    }
return (
    <>
    <nav className=" relative flex justify-between items-center py-8 z-20">
        <img src={logo} alt="" className=' max-[570px]:w-44 max-[475px]:w-36' />
        <ul className='flex gap-8 max-[1160px]:hidden font-bold items-center'>
            <li className=' text-main-brown trans hover:text-sec-brown cursor-pointer'>Home</li>
            <li className='text-sec-black trans hover:text-sec-brown cursor-pointer'>Pages</li>
            <li className='text-sec-black trans hover:text-sec-brown cursor-pointer'>Products</li>
            <li className='text-sec-black trans hover:text-sec-brown cursor-pointer'>Blogs</li>
            <li className='text-sec-black trans hover:text-sec-brown cursor-pointer'>Portfolio</li>
            <li className='text-sec-black trans hover:text-sec-brown cursor-pointer relative before:absolute before:w-3 before:-right-1 before:top-0 before:h-3 before:flex before:items-center before:justify-center  before:text-xs before:p-2 before:rounded-full before:bg-main-red before:content-["0"] before:text-main-white'><FontAwesomeIcon icon={faBasketShopping} size='lg' /></li>
            <button className=' bg-sec-brown text-main-white px-4 py-2 trans hover:bg-main-brown text-sm'>Contact</button>
        </ul>
        <ul className=' min-[1160px]:hidden flex gap-8 max-[475px]:gap-3  font-bold items-center'>
            <li><FontAwesomeIcon icon={faBars} size='2xl' onClick={() => {showList();sendList;}} className='text-sec-black cursor-pointer  max-[475px]:text-xl trans hover:text-sec-brown' /></li>
            <li>
                <button className=' bg-sec-brown text-main-white px-4 py-2  max-[475px]:text-xs trans hover:bg-main-brown text-sm'>Contact</button>
            </li>
        </ul>
        
        <List lst = {list}/>
    </nav>

    </>
)
}

export default Navbar