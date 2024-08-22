"use client";

import React, { useEffect } from "react";
import HeaderDetail from "./components/headerDetail/HeaderDetail";
import CompanyInvolved from "./components/companyInvolved/CompanyInvolved";
import ActivationsSwap from "./components/activationsSwap/ActivationsSwap";
import ActivationsDetail from "./components/activationsDetail/ActivationsDetail";
import PoolTogether from "./components/poolTogether/PoolTogether";
import dataNames from './components/dataNames.json';

interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const item = dataNames.find((data) => data.id.toString() === params.id);

  return (
    <div className=" min-h-[100vh] relative text-[#010101] dark:text-[#fefefe]  hero flex flex-col gap-[3rem] w-full m-auto xl:max-w-[70%]  3xl:max-w-[60%] px-[1.3rem] mt-[4rem] ">
      {item ? (
        <HeaderDetail route={item.name} />
      ) : (
        <p>Item not found</p>
      )}
      <CompanyInvolved />
      <PoolTogether />
      <ActivationsSwap />
      <ActivationsDetail />
    </div>
  );
};

export default Page;
