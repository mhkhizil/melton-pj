import Footer from "@/components/Footer/FooterComp";

import { cn } from "@/lib/utils";
import { font_variables } from "@/services/font";

import Head from "next/head";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Made in Melton</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={cn("w-full  flex-center", font_variables)}>
        <div className=" flex-col w-[80%] px-4">{children}</div>
      </main>
    </>
  );
};

export default DefaultLayout;
