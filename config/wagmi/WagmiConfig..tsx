"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Web3ModalProps {
  children: React.ReactNode;
}

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "6543013b17d8a4dcd2b963f65f8b48eb";

// 2. Create wagmiConfig
const metadata = {
  name: "marketplace",
  description: "marketplace",
  url: "https://jedaicrypto.brainstems.ai/", // origin must match your domain & subdomain
  icons: ["/favicon.svg"],
};

const chains = [mainnet] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  /*  ...wagmiOptions // Optional - Override createConfig parameters */
});

// 3. Create modal
export default createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function Web3ModalProvider({ children }: Web3ModalProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
