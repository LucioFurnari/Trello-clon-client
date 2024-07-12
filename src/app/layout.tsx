import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import UserContextProvider from "@/context/UserContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trello-Clone",
  description: "This is trello clone project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <Navbar />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
