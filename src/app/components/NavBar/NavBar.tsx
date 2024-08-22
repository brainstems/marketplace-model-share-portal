import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Button from "../../ui/Button/Button";

interface Props {
  className?: string;
  login?: boolean;
}

const NavBar = ({ className, login }: Props) => {
  return (
    <div
      className={`w-full relative !z-[100] h-[78px] sm:h-[98px]  bg-[#fefefe] dark:bg-[#0f0f0f] flex justify-between sm:justify-between items-center px-[1rem]  2xs:px-[1rem] shadow-xl sm:px-[1rem]  2sm:px-[2rem]  md:px-[3rem] dark:border-b dark:border-[#616161]  ${className}`}
    >
      <Link href={"/"}>
        <img src="/assets/image/logo.svg" alt="logo" className="dark:hidden " />
        <img src="/assets/image/logoWhite.svg" alt="logo" className="hidden dark:block" />
      </Link>
      <div className=" flex justify-center items-center gap-[4rem]">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
