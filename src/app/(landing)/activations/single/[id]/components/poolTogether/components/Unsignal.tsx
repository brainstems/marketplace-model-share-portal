import React from "react";

const Unsignal = () => {
  return (
    <div className="w-full flex-col gap-2 flex h-full relative px-2">
      <div className="w-full flex gap-[3rem] mt-4  ">
        <div className="flex flex-col gap-2">
          <span className="text-[#494949] tracking-wide dark:text-[#e2e2e2a2] text-[12px] md:text-[16px] font-semibold">
            PRICE / SHARE
          </span>
          <strong className="text-[14px] md:text-[16px] tracking-wide ">639.6K $STEMS</strong>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#494949] tracking-wide dark:text-[#e2e2e2a2] text-[12px] md:text-[16px] font-semibold">
            SHARES
          </span>
          <strong className="text-[14px] md:text-[16px] tracking-wide ">319.8</strong>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#494949] tracking-wide dark:text-[#e2e2e2a2] text-[12px] md:text-[16px] font-semibold">
            TOTAL VALUE
          </span>
          <strong className="text-[14px] md:text-[16px] tracking-wide ">204.6K</strong>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[.5rem] mt-4 border rounded-xl bg-[#f5f5f5] dark:bg-[#0f0f0f] border-[#e0e0e0] dark:border-[#3f3f3f] shadow-xl py-4 px-4">
        <div className="flex gap-4 lg:flex-row flex-col-reverse  pb-4  justify-between ">
          <div className="flex gap-[1rem]  ">
            <div className="flex flex-col gap-2 border-2 dark:border-[#323232] rounded-xl px-6 bg-[#ffffff] dark:bg-[#161616] py-2 shadow-md">
              <strong className="text-[#494949] tracking-wide dark:text-[#e2e2e2a2] text-[14px]">
                YOUR SHARES
              </strong>
              <span className="text-[18px] font-bold">500</span>
            </div>
            <div className="flex flex-col gap-2 border-2 dark:border-[#323232] rounded-xl px-6 bg-[#ffffff] dark:bg-[#161616] py-2 shadow-md">
              <strong className="text-[#494949] tracking-wide dark:text-[#e2e2e2a2] text-[14px]">
                SHARE VALUE
              </strong>
              <span className="text-[18px] font-bold"> 1200</span>
            </div>
          </div>

          <div className="flex gap-2 max-w-[28rem] justify-start items-center py-2 mb-1 px-2  rounded-xl backdrop-blur-[10px] relative lg:top-[-1rem] ">
            <div className="w-[.8rem] h-[.8rem] rounded-full bg-[#85ff85]"></div>
            <span className="text-[#383838] font-semibold dark:font-medium tracking-wide dark:text-[#cecece] truncate ">
              {" "}
              0xC8cBAf120Baf9777A51a743fB2172Ed117364586
            </span>
          </div>
        </div>
        <hr className="border-[#d1d1d1] dark:border-[#313131] py-2 border-t-2 dark:broder-t-0" />
        <div className="flex flex-row justify-between items-center gap-2 px-2 ">
          <strong className="text-[#494949] tracking-wide dark:text-[#e2e2e2a2] text-[16px]">
            WALLET BALANCE
          </strong>
          <span className="text-[18px] font-bold">100.00</span>
        </div>

        <div className="w-full flex flex-col gap-[.5rem] mt-4 border rounded-xl bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] shadow-xl py-2 px-4">
          <div className="flex gap-4 justify-between relative">
            <input
              type="number"
              defaultValue={0}
              className="text-[16px] max-w-[8rem] md:max-w-[100%] md:flex-1 h-[3rem] font-semibold leading-[130%] px-4 focus:outline-none focus:border-0 relative z-[1] bg-transparent "
            />

<div className="flex gap-4 justify-center items-center">
              <strong className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2]">
                SHARES
              </strong>
              <button className="shadow-md px-3 py-2 rounded-xl bg-[#8779ff] dark:bg-[#8779ff] font-bold tracking-wide">
                Max
              </button>
            </div>
          </div>
          <hr className="border-[#d1d1d1] dark:border-[#7a7a7a] border-t-2 dark:broder-t-0" />
          <div className="text-[16px] h-[2rem] font-[600] flex items-center  leading-[130%] px-4 focus:outline-none focus:border-0 relative text-[#000000b6] dark:text-[#ccccccf5]  z-[1] bg-transparent">
            ~ 0.0 STEMS
          </div>
        </div>
      </div>

      <div className="w-full flex-col h-full gap-[2rem] mt-4 px-2 ">
        <div className="flex w-full justify-between items-center mt-2">
          <span className="text-[16px] font-semibold leading-[130%]">
            Price impact
          </span>
          <strong>0 %</strong>
        </div>
        <div className="flex w-full justify-between items-center mt-2">
          <span className="text-[16px] font-semibold leading-[130%]">
            Slippage tolerance
          </span>
          <strong>0.5 %</strong>
        </div>
      </div>

      <div className="w-full flex  md:flex-row flex-col justify-start gap-4 mt-[2rem]">
        <button className="w-full px-9 h-[3.5rem] rounded-xl bg-[#7b50bd5d] text-[18px] font-semibold text-[#efefef] flex justify-center items-center tracking-wide cursor-pointer">
          Unsignal
        </button>
      </div>
    </div>
  );
};

export default Unsignal;
