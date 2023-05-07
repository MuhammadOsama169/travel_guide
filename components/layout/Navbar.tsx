'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';

type Props = {};

export const Navbar = (props: Props) => {
  const [isMenuToggled, setMenuToggled] = React.useState<boolean>(false);

  const handleClick = () => {
    setMenuToggled(!isMenuToggled);
  };
  return (
    <>
      <nav className="w-full sm:flex hidden mt-5 items-center">
        {/* // Desktop view */}
        <div className="flex md:justify-start justify-center items-center md:ml-10 mx-auto">
          <Image src={logo} alt="logo" className="w-auto h-[50px]" />
        </div>
        <div className="flex items-center ml-auto gap-5 mr-10 ">
          <Link href={'/'}>Home</Link>
          <Link
            href={'/signIn'}
            className="rounded-lg bg-black text-white flex items-center px-5 py-2"
          >
            Sing In
          </Link>
        </div>
      </nav>
      {/* Mobile view */}
      <nav className="w-full flex mt-5 sm:hidden items-center align-middle">
        <div className="flex md:justify-start justify-center items-center md:ml-5 mx-auto">
          <Image src={logo} alt="logo" className="w-auto h-[50px]" />
        </div>
        <div className="sm:flex items-center  mr-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-[#222222] w-[200px] ss:w-[300px] py-5 z-40">
              <div className="flex flex-row-reverse justify-items-end px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                  onClick={handleClick}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {/* Items */}
              <div className="flex flex-col text-white justify-center mx-auto items-center text-xl gap-5 pt-10">
                <Link href={'/'}>Home</Link>
                <Link href={'/signIn'}>Sing In</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
