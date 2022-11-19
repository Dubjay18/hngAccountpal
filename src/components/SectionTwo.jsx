import React from "react";

function SectionTwo() {
  return (
    <div className='py-20 mt-20'>
      <div className='w-[80%] flex items-center md:flex-row flex-col gap-10 mx-auto'>
        <div className=''>
          <h4 className='md:text-[48px] text-[30px] font-[700] leading-[59.95px] text-[#194185]'>
            Technological Risks
          </h4>
          <p className='text-[16px] leading-[35px]'>
            The technological risk posed by GPT-3 is the
            knowledge gap in its ability to perform
            mathematical computation and its known use case
            in Finance. Alternatively, an algorithm can be
            used to balance out account statements and sales
            then output can be fed to GPT-3 to summarize.
          </p>
        </div>
        <img src='/Rect2.png' alt='' />
      </div>
    </div>
  );
}

export default SectionTwo;
