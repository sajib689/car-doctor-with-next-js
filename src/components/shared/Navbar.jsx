import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const links = 
    <>
    <li className='font-semibold hover:text-primary duration-300'><Link href='/'>Home</Link></li>
    <li className='font-semibold hover:text-primary duration-300'><Link href='/about'>About</Link></li>
    <li className='font-semibold hover:text-primary duration-300'><Link href='/services'>Services</Link></li>
    <li className='font-semibold hover:text-primary duration-300'><Link href='/blog'>Blog</Link></li>
    <li className='font-semibold hover:text-primary duration-300'><Link href='/contact'>Contact</Link></li>
    </>
  return (
   <div className=' bg-base-100'>
     <div className="container mx-auto navbar">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {links}
        </ul>
      </div>
      <Link href='/'>
      <Image src='/assets/logo.svg' width={100} height={60} alt='logo'/>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {links}
      </ul>
    </div>
    <div className="navbar-end">
      <div className='flex space-x-4 me-5'>
      <FaCartPlus className='text-2xl hover:text-primary cursor-pointer'/>
      <IoIosSearch className='text-2xl hover:text-primary cursor-pointer'/>

      </div>
      <Link href='/' className="btn btn-outline btn-primary duration-300">Appointment</Link>
      <Link href='/login' className="ms-2 btn btn-outline btn-primary duration-300">Login</Link>
    </div>
  </div>
   </div>
  );
};

export default Navbar;
