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
    <div className=" bg-white md:h-screen w-screen md:fixed flex flex-row md:px-36">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex-initial md:w-2/12 w-0">
        <Menu />
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex-grow w-full mt-16">{children}</div>

        <div className="flex-initial w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
