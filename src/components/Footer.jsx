import React from "react";

function Footer() {
  return (
    <div className='bg-[#D1E9FF]'>
      <div className='  p-10 grid gap-10 lg:grid-cols-4 w-[80%] mx-auto'>
        <div>
          <img
            src='/Account-Pal.png'
            alt=''
            className='mb-10'
          />
          <p className='text-[20px]'>
            This is a website that can help you balance your
            sales account
          </p>
          <div className='flex items-center gap-6'>
            <img src='/fb2.png' alt='' />
            <img src='/ig2.png' alt='' />
            <img src='/tw2.png' alt='' />
          </div>
          <br />
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>About Us</p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Our story
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Work Environment
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Enroll Us
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>
            Resources
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Help Center
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Support
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            FAQs
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>Product</p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Pricing
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            How it works
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Features
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Start for free
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
