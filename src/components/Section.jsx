import React from "react";

function Section() {
  return (
    <div className='py-20 mt-20'>
      <div className='w-[80%] flex items-center md:flex-row flex-col gap-10 mx-auto'>
        <div className=''>
          <h4 className='md:text-[48px] text-[30px] font-[700] leading-[59.95px] text-[#194185]'>
            What is GPT-3
          </h4>
          <p className='text-[16px] leading-[35px]'>
            Generative Pre-trained Transformer 3 (GPT-3;
            stylized GPT·3) is an autoregressive language
            model that uses deep learning to produce
            human-like text. Given an initial text as a
            prompt, it will produce text that continues the
            prompt. The architecture is a standard
            transformer network (with a few engineering
            tweaks) with the unprecedented size of
            2048-token-long context and 175 billion
            parameters (requiring 800 GB of storage). The
            training method is "generative pretraining",
            meaning that it is trained to predict what the
            next token is. The model demonstrated strong
            few-shot learning on many text-based tasks.
          </p>
        </div>
        <img src='/rect.png' alt='' />
      </div>
    </div>
  );
}

export default Section;
