"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === "dark") {
    return (
      <div className="flex shadow select-none cursor-pointer z-[90]  p-2 rounded-xl  border-2  w-[2.5rem] h-[2.5rem] xl:w-[2.55rem] xl:h-[2.55rem] border-[#313131] dark:hover:bg-[#5918b342] transition-all duration-200 fade-in-0 animate-in  justify-center items-center" onClick={() => setTheme("light")} >
        <FiSun  />{" "}
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="flex shadow select-none cursor-pointer z-[90]  p-2 rounded-xl  border-2  w-[2.5rem] h-[2.5rem] xl:w-[2.55rem] xl:h-[2.55rem] border-[#313131] dark:hover:bg-[#5918b342] transition-all duration-200 fade-in-0 animate-in  justify-center items-center" onClick={() => setTheme("dark")} >
        {" "}
        <FiMoon className="stroke-black" />
      </div>
    );
  }
}
