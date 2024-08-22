import React from "react";

const Signal = () => {
  return (
    <div className="w-full flex-col gap-2 flex h-full relative px-2">
      <div className="w-full flex gap-[3rem] mt-4">
        <div className="flex flex-col gap-2">
          <span className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2] font-semibold text-[14px]">
            PRICE / SHARE
          </span>
          <strong>1.8K $STEMS</strong>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2] font-semibold text-[14px]">
            SHARES
          </span>
          <strong>850.6</strong>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2] font-semibold text-[14px]">
            TOTAL VALUE
          </span>
          <strong>1.5M</strong>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[.5rem] mt-4 border rounded-xl bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] shadow-xl py-4 px-4">
        <div className="flex gap-4 flex-col pb-4 px-2 ">
          <div className="flex gap-2 justify-start items-center py-1">
            <div className="w-[.8rem] h-[.8rem] rounded-full bg-[#85ff85]"></div>
            <span className="text-[#222222] font-medium tracking-wide dark:text-[#838383a2] truncate">
              {" "}
              0xC8cBAf120Baf9777A51a743fB2172Ed117364586
            </span>
          </div>
          <div className="flex gap-[2rem] ">
            <div className="flex flex-col gap-2">
              <strong className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2] text-[16px]">
                YOUR SHARES
              </strong>
              <span className="text-[18px] font-bold">0</span>
            </div>
            <div className="flex flex-col gap-2">
              <strong className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2] text-[16px]">
                SHARE VALUE
              </strong>
              <span className="text-[18px] font-bold"> 0</span>
            </div>
          </div>
        </div>
        <hr className="border-[#acacac] dark:border-[#7a7a7a] py-2" />
        <div className="flex flex-col gap-2 px-2 pb-4">
          <strong className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2] text-[16px]">
            WALLET BALANCE
          </strong>
          <span className="text-[18px] font-bold">1.00K</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[.5rem] mt-4 border rounded-xl bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] shadow-xl py-2 px-4">
        <div className="flex gap-4 justify-between relative">
          <input
            type="number"
            defaultValue={0.01}
            className="text-[16px] max-w-[8rem]  md:max-w-[100%] h-[4rem] font-semibold leading-[130%] px-4  focus:outline-none focus:border-0 relative  z-[1] bg-transparent"
          />

          <div className="flex gap-4 justify-center items-center">
            <strong className="text-[#a1a1a1] tracking-wide dark:text-[#e2e2e2a2]">
              STEMS
            </strong>
            <button className="shadow-md px-3 py-2 rounded-xl bg-[#8779ff] dark:bg-[#8779ff]">
              Max
            </button>
          </div>
        </div>
        <hr className="border-[#acacac] dark:border-[#7a7a7a]" />
        <input
          type="number"
          defaultValue={0.01}
          className="text-[16px] h-[4rem] font-semibold leading-[130%] px-4 focus:outline-none focus:border-0 relative  z-[1] bg-transparent"
        />
      </div>

      <div className="w-full flex-col h-full gap-[2rem] mt-4 px-2 ">
        <div className="flex w-full justify-between items-center mt-2">
          <span className="text-[16px] font-semibold leading-[130%]">
            2.5% TAX
          </span>
          <strong>0 STEMS</strong>
        </div>
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
        <button className="w-full px-9 h-[3.5rem] rounded-xl bg-[#653BA5] text-[18px] font-semibold text-[#efefef] flex justify-center items-center tracking-wide cursor-pointer">
          Approve 0 STEMS
        </button>
        {/* <button className="w-full px-9 h-[3.5rem] rounded-xl bg-[#653BA5] text-[18px] font-semibold text-[#efefef] flex justify-center items-center tracking-wide cursor-pointer">
          Infinite Approve
        </button> */}
      </div>
    </div>
  );
};

export default Signal;
