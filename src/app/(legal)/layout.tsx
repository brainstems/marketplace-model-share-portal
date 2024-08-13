import { Metadata } from "next";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Jedai Football",
  description: " ",
};

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <NavBar  />
        {children}
      <Footer />
    </>
  );
};
 