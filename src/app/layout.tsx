import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ToastContainer } from "react-toastify";
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Jedai Football",
  description: " ",
};

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
