'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo/Agsons logo.png';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Drawer } from 'antd';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import insta from "@/assets/images/instagram.png"
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="bg-white md:bg-transparent md:backdrop-blur-sm shadow-md fixed w-full z-50 top-0 ">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={showDrawer}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={'/'}>
              <Image
                className=" h-20 w-auto"
                src={logo}
                width={150}
                height={150}
                alt="Logo"
              />
            </Link>

            <div className="hidden sm:flex sm:items-center sm:ml-20 uppercase">
              <div className="flex space-x-4">
                <Link
                  className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/product"
                >
                  product
                </Link>
                <Link
                  className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="#about"
                >
                  About
                </Link>
                <Link
                  className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href={pathName === "/" ? "#faq" : "/"} 
                >
                  Faq
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-5">
            <Link href={"https://www.facebook.com/profile.php?id=61556264781121"} target='_blank' className='  h-10 w-10 rounded-full bg-white shadow-lg  hidden md:flex justify-center items-center'>
            <FaFacebookF className='text-blue-600' size={20} />

            </Link>
            <Link href={"https://www.instagram.com/agsons_me/?fbclid=IwAR2c41ivOZ4VQhMOZ_5RaNYwYCXwYfJVmqN3vbREGBb4-ml-XzQ9rg_2rgA"} target='_blank' className='  h-10 w-10 rounded-full bg-white shadow-lg hidden md:flex justify-center items-center'>
              <Image width={300} height={300} className='p-2' src={insta} alt='insta'/>
            </Link>
            <Link
            href='#Contact'
              className="bg-black text-white text-[8px] md:text-sm px-3 py-2 rounded-full  font-medium transition duration-700"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>

      {open && (
         <Drawer width={250} placement='right' title={<div className='flex gap-4 justify-end'> <Link href={"#"} target='_blank' className='  h-10 w-10 rounded-full bg-white shadow-lg  flex justify-center items-center'>
         <FaFacebookF className='text-blue-600' size={20} />
         </Link>
         <Link href={""} target='_blank' className='  h-10 w-10 rounded-full bg-white shadow-lg flex justify-center items-center'>
           <Image width={300} height={300} className='p-2' src={insta} alt='insta'/>
         </Link></div>}
          onClose={onClose}  open={open}>
           <div className=" pb-3 space-y-3 uppercase">
            <Link
              className=" hover:text-black block rounded-md text-base font-medium" onClick={onClose}
              href="/"
            >
              Home
            </Link>
            <Link
              className=" hover:text-black block rounded-md text-base font-medium" onClick={onClose}
              href="/product"
            >
              Product
            </Link>
            <Link
              className=" hover:text-black block rounded-md text-base font-medium" onClick={onClose}
              href={pathName === "/" ? "#faq" : "/"} 
            >
              Faq
            </Link>
            <Link
              className=" hover:text-black block rounded-md text-base font-medium" onClick={onClose}
              href="#about"
            >
              About
            </Link>
          </div>
          
       </Drawer>
     
      )}
    </nav>
  );
};

export default Header;
