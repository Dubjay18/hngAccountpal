import React from "react";
import Card from "./Card";

const imgArray = [
  "/card1.png",
  "/card2.png",
  "/card3.png",
  "/cardp1.png",
  "/card4.png",
  "/card5.png",
  "/card6.png",
  "/cardp2.png",
];

function Grid() {
  return (
    <div>
      <h2 className='font-[700] flex items-center  md:text-[48px] text-[24px] my-10 w-[90%] mx-auto text-[#194185]'>
        Use cases for GPT-3
      </h2>
      <div className='px-6 w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 mx-auto my-10'>
        <div className='px-4'>
          <h2 className='font-[400] text-[28px]'>
            Automated customer service
          </h2>
          <p>
            GPT-3 can be used to automatically generate
            responses to customer inquiries, saving time and
            money for customer service teams.
          </p>
        </div>
        <div className='px-4'>
          <h2 className='font-[400] text-[28px]'>
            Generating required reports
          </h2>
          <p>
            GPT-3 can be used to automatically generate
            responses to customer inquiries, saving time and
            money for customer service teams.
          </p>
        </div>
        <div className='px-4'>
          <h2 className='font-[400] text-[28px]'>
            Knowledge management
          </h2>
          <p>
            GPT-3 can be used to automatically generate
            responses to customer inquiries, saving time and
            money for customer service teams.
          </p>
        </div>
        <div className='px-4'>
          <h2 className='font-[400] text-[28px]'>
            Natural language processing
          </h2>
          <p>
            GPT-3 can be used to automatically generate
            responses to customer inquiries, saving time and
            money for customer service teams.
          </p>
        </div>
        <div className='px-4'>
          <h2 className='font-[400] text-[28px]'>
            Automatic machine translation
          </h2>
          <p>
            GPT-3 can be used to automatically generate
            responses to customer inquiries, saving time and
            money for customer service teams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
