import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

type TLayout = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: TLayout) => {
  return (
    <div className=" bg-white md:h-screen w-screen md:fixed flex flex-row md:px-36 ">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex-initial md:w-3/12 w-0 md:pr-24">
        <Menu />
      </div>

      <div className="flex-grow flex flex-col md:w-9/12 md:mt-0 mt-12">
        <div className="flex-grow overflow-scroll scrollbar px-6 md:px-0">
          {children}

          <div className="flex-initial w-full md:mt-64 mt-32">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
