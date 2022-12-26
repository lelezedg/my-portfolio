import Head from "next/head";
import React, { useState } from "react";
import { MenuCloseIcon, MenuIcon } from "../icons";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

type TLayout = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: TLayout) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white md:h-screen w-screen md:fixed flex flex-row md:px-36 ">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex-initial md:w-3/12 w-0 md:pr-24">
        <Menu />
      </div>

      <div className="flex-grow flex flex-col md:w-9/12 md:mt-0 mt-4">
        <div className="flex-grow overflow-scroll scrollbar px-6 md:px-0">
          <div className="md:hidden visible fixed right-6">
            <div className="flex justify-end">
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex self-end px-0 bg-transparent"
              >
                {isMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
              </Button>
            </div>

            <div className="mt-8 mr-2">{isMenuOpen && <Menu />}</div>
          </div>

          {!isMenuOpen && (
            <div className="mt-16">
              {children}

              <div className="flex-initial w-full md:mt-64 mt-32">
                <Footer />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
