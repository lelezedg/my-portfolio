import React from "react";
import { BehanceIcon, DribbleIcon, LinkedinIcon } from "../icons";
import { MenuItem } from "./MenuItem";
import { useRouter } from "next/router";
import { Text } from "./Text";
import Link from "next/link";
import content from "../content/home.json";

export const Menu = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex flex-col h-screen md:justify-center md:self-center self-start items-end text-end">
      <Link
        className="mb-7 transition duration-300 md:hover:scale-105"
        href="/"
      >
        <Text variant="headline">Hi, I&apos;m Elene</Text>
        <Text variant="body">UX/UI Designer</Text>
      </Link>

      <div className="flex flex-col">
        <MenuItem title="Home" link="/" isActive={pathname === "/"} />

        {content.cards.map((card, index) => (
          <MenuItem
            key={index}
            title={card.title}
            variant={card.projectType}
            link={card.link}
            isActive={pathname === card.link}
          />
        ))}

        <MenuItem
          title="About"
          link="/about"
          isActive={pathname === "/about"}
        />

        <MenuItem
          title="My Illustrations"
          link="/illustrations"
          isActive={pathname === "/illustrations"}
        />
      </div>

      <div className="mt-7 flex -mx-2">
        <Link
          className="mx-2 transition duration-300 md:hover:scale-125"
          href="https://www.linkedin.com/in/elenezed/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>

        <Link
          className="mx-2 transition duration-300 md:hover:scale-125"
          href="https://www.behance.net/EleneZed"
          target="_blank"
        >
          <BehanceIcon />
        </Link>

        <Link
          className="mx-2 transition duration-300 md:hover:scale-125"
          href="https://dribbble.com/EleneZed"
          target="_blank"
        >
          <DribbleIcon />
        </Link>
      </div>
    </div>
  );
};
