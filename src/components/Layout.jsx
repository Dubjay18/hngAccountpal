import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import Footer from "./Footer";
import {
  Add,
  ArrowRight2,
  SearchNormal,
} from "iconsax-react";

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [nav, setNav] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 140) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <>
      {nav && (
        <nav
          className={`flex items-center my-0 !w-[100%]
         fixed   md:px-28 px-3 shadow py-2 bg-white
          justify-between mx-auto md:gap-0 gap-5 transiton-all top-0 duration-100`}>
          <div className='flex gap-3 items-center'>
            <img src='/logo-pal.png' alt='' />
            <h1 className='lg:text-[48px] text-[30px] font-[600]'>
              Account Pal
            </h1>
          </div>
          <ul className='lg:flex hidden items-center gap-10'>
            <Link
              to='/'
              className='cursor-pointer hover:underline'>
              Pricing
            </Link>
            <Link
              to={"/placeToStay"}
              className='cursor-pointer hover:underline'>
              About
            </Link>
            <li className='cursor-pointer hover:underline'>
              sourcessources
            </li>
            <li className='cursor-pointer hover:underline'>
              Company
            </li>
          </ul>
          <div className='lg:flex hidden items-center gap-7'>
            <button
              onClick={() => setShowModal(true)}
              className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] text-[#1570EF] font-[600] px-4 py-3'>
              Sign up
            </button>
            <button
              onClick={() => setShowModal(true)}
              className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] bg-[#1570EF] font-[600] px-4 py-3 text-white'>
              Login
            </button>
          </div>
          {/* <HambergerMenu
          size='28'
          className='lg:hidden flex cus-text'
          color='#B840AE'
        /> */}
          <section className='MOBILE-MENU flex lg:hidden'>
            <div
              className='HAMBURGER-ICON space-y-2'
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            </div>

            <div
              className={`
              ${
                isNavOpen ? "showMenuNav " : "hideMenuNav "
              } transition-all duration-500`}>
              <div
                className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className='h-8 w-8 text-gray-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </div>
              <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
                <Link
                  onClick={() => setIsNavOpen(false)}
                  to='/'
                  className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                  Pricing
                </Link>
                <Link
                  to='/placeToStay'
                  onClick={() => setIsNavOpen(false)}
                  className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                  Place to stay
                </Link>
                <li className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                  sources
                </li>
                <li
                  onClick={() => setIsNavOpen(false)}
                  className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                  Company
                </li>
                <li>
                  <button
                    onClick={() => setShowModal(true)}
                    className='hover:opacity-75 mb-2 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] text-[#1570EF] font-[600] px-4 py-3'>
                    Sign up
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowModal(true)}
                    className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] bg-[#1570EF] font-[600] px-4 py-3 text-white'>
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      )}
      <nav
        className={`flex items-center ${
          nav ? "!opacity-0" : "opacity-100"
        }  justify-between md:w-[80%] w-[95%] my-10 mx-auto md:gap-0 gap-5 transiton-all top-0 duration-300`}>
        <div className='flex gap-3 items-center'>
          <img src='/logo-pal.png' alt='' />
          <h1 className='lg:text-[48px] text-[30px] font-[600]'>
            Account Pal
          </h1>
        </div>

        <ul className='lg:flex hidden items-center gap-10'>
          <Link
            to='/'
            className='cursor-pointer hover:underline'>
            Pricing
          </Link>
          <Link
            to={"/placeToStay"}
            className='cursor-pointer hover:underline'>
            About
          </Link>
          <li className='cursor-pointer hover:underline'>
            Resources
          </li>
          <li className='cursor-pointer hover:underline'>
            Company
          </li>
          <li>
            <SearchNormal size={20} />
          </li>
        </ul>
        <div className='lg:flex hidden items-center gap-7'>
          <button
            onClick={() => setShowModal(true)}
            className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] text-[#1570EF] font-[600] px-4 py-3'>
            Sign up
          </button>
          <button
            onClick={() => setShowModal(true)}
            className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] bg-[#1570EF] font-[600] px-4 py-3 text-white'>
            Login
          </button>
        </div>

        {/* <HambergerMenu
          size='28'
          className='lg:hidden flex cus-text'
          color='#B840AE'
        /> */}
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div
            className={`
              ${
                isNavOpen ? "showMenuNav " : "hideMenuNav "
              } transition-all duration-500`}>
            <div
              className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
              <Link
                onClick={() => setIsNavOpen(false)}
                to='/'
                className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                Pricing
              </Link>
              <Link
                to='/placeToStay'
                onClick={() => setIsNavOpen(false)}
                className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                Place to stay
              </Link>
              <li className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                sources
              </li>
              <li
                onClick={() => setIsNavOpen(false)}
                className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                Company
              </li>
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] text-[#1570EF] font-[600] px-4 py-3'>
                  Sign up
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] border-[#1570EF] border-[1px] bg-[#1570EF] font-[600] px-4 py-3 text-white'>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      {children}
      <Footer />
      <style>{`
      .hideMenuNav {
        top: -1000px;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100vh;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
}

export default Layout;
