import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atividade Extensionista",
  description: "Atividade extensionista desenvolvido por Felipe e Gustavo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <div className="
        flex flex-col
        bg-base-100
        h-screen overflow-hidden
        ">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
