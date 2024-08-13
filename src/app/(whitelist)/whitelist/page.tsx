import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";
import Whitelist from "./components/Whitelist";
import { Web3ModalProvider } from "../../../../config/WagmiConfig.";

const page = () => {
  return (
      <Web3ModalProvider>
        <NavBar className="!absolute top-0 !bg-transparent"/>
        <Whitelist />
      </Web3ModalProvider>
  );
};

export default page;
