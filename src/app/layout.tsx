import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ThemeProviders } from "../../utils/providers/ThemeProviders";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marketplace",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProviders>
          <ToastContainer />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
