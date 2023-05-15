'use client';
import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';

export const Navbar = () => {
  const [providers, setProviders] = React.useState(null);

  const { data: session } = useSession();

  const [isMenuToggled, setMenuToggled] = React.useState<boolean>(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const handleClick = () => {
    setMenuToggled(!isMenuToggled);
  };

  return (
    <>
      <nav className="w-full sm:flex hidden mt-5 items-center">
        {/* // Desktop view */}
        <div className="flex md:justify-start justify-center items-center md:ml-10 mx-auto">
          <Link href={'/'}>
            <Image src={logo} alt="logo" className="w-auto h-[50px]" />
          </Link>
        </div>

        <div className="sm:flex hidden">
          {session?.user ? (
            <div className="flex gap-3 md:gap-5 items-center">
              <Link href="/create" className="">
                Create Post
              </Link>

              <button type="button" onClick={signOut} className="">
                Sign Out
              </button>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full md:mr-10"
                alt="profile"
              />
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className=" md:mr-10"
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>

      {/* Mobile view */}
      <nav className="w-full sm:hidden flex md:justify-start justify-between items-center md:ml-5 mt-10 mx-auto px-10">
        <Image src={logo} alt="logo" className="w-auto h-[50px]" />
        {/* Hamburger icon */}
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
          <div className="fixed right-0 top-0 h-[250px] bg-[#454343] w-[200px]  z-40 rounded-l-lg border-black py-10">
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

            <div className="flex flex-col text-white justify-center mx-auto items-center text-xl gap-5 pt-10">
              <Link href={'/'}>Home</Link>
              {session?.user ? (
                <Link
                  href={'/signIn'}
                  className="rounded-lg bg-black text-white flex items-center px-5 py-2"
                >
                  Sing Out
                </Link>
              ) : (
                <Link
                  href={'/signIn'}
                  className="rounded-lg bg-black text-white flex items-center px-5 py-2"
                >
                  Sing In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
