import {FaFacebook , FaLinkedin , FaInstagram , FaTwitter} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className="p-4 bg-gray-800 text-gray-200">
        <div className="flex justify-between items-center">
        <div className="flex items-center pl-8">
          <i className="text-2xl fas fa-campground"></i>

          <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
            <Link href="/">
            Koora Live
            </Link>
            </h1>
        </div>
        
       {/*  <!-- MOBILE NAV ICON --> */}
        <div className="md:hidden block absolute top-4 left-4 fixed">
          <button aria-label="navigation" type="button"  className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white">
            <AiOutlineMenu className="text-2xl"/>      
              </button>
        </div>
        
       {/*  <!-- NAVIGATION - LARGE SCREENS --> */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="text-lg pr-8 "><a href="/" className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{"text-underline-offset":" 8px"}}>الرئيسية</a></li>
          <li className="text-lg pr-8"><a href="/aboute" className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"  style={{"text-underline-offset":" 8px"}}>عن الموقع</a></li>
          <li className="text-lg pr-8"><a href="" className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"  style={{"text-underline-offset":" 8px"}}>المدونة</a></li>
          <li className="text-lg pr-8"><a href="" className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"  style={{"text-underline-offset":" 8px"}}>إتصل بنا</a></li>
        </ul>
        </div>
      
        <div className="hidden md:flex">
        <ul className="hidden md:flex">
        <li className="text-lg pr-8 ">
            <a href="#"  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{"text-underline-offset":" 8px"}}><FaFacebook className="text-2xl pr-2 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"/></a>
            </li>
            <li className="text-lg pr-8 ">
            <a href="#"  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{"text-underline-offset":" 8px"}}>
                <FaLinkedin className="text-2xl pr-2 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"/></a>
            </li>
            <li className="text-lg pr-8 ">
            <a href="#"  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{"text-underline-offset":" 8px"}}>
                <FaInstagram className="text-2xl pr-2 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"/></a>
            </li>
          
            </ul>
            
        

        </div>
        </div>
          
      {/*   <!-- MOBILE MENU --> */}
      <div id="mobileMenu" className="hidden flex w-full mx-auto py-8 text-center">
              <div className="flex flex-col justify-center items-center w-full">
              <a href="#" className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"  style={{"text-underline-offset":" 8px"}}>Home</a>
              <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"  style={{"text-underline-offset":" 8px"}}>About</a>
              <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"  style={{"text-underline-offset":" 8px"}}>Blog</a>
                <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"  style={{"text-underline-offset":" 8px"}}>Contact</a>
                </div>
            </div>
      </nav>
      




    )







}