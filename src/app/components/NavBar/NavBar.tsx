import Link from "next/link";

interface Props {
  className?: string;
  login?: boolean;
}

const NavBar = ({ className, login }: Props) => {
  return (
    <div
      className={`w-full relative bg-[#0000000]  z-[99999] h-[4rem] flex justify-between items-center px-[1rem] md:px-[4rem] py-[3rem]  ${className}`}
    >
       <Link href={'/'}>
        <div className=" flex justify-center items-center w-full h-full flex-col gap-2 top-0 left-0 absolute">
          <img
            src="/assets/image/logo.svg"
            alt="logo"
          />
        </div>
      </Link>
      
    </div>
  );
};

export default NavBar;
