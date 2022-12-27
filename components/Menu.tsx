import React from "react";
import { BehanceIcon, DribbleIcon, LinkedinIcon } from "../icons";
import { MenuItem } from "./MenuItem";
import { useRouter } from "next/router";
import { Text } from "./Text";
import Link from "next/link";

export const Menu = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex flex-col h-screen md:justify-center md:self-center self-start items-end text-end">
      <Link className="mb-7" href="/">
        <Text variant="headline">Hi, I&apos;m Elene</Text>
        <Text variant="body">UX/UI Designer</Text>
      </Link>

      <div className="flex flex-col">
        <MenuItem title="Home" link="/" isActive={pathname === "/"} />
        <MenuItem
          title="Learn First Aid"
          variant="mobile"
          link="/learn-first-aid-app"
          isActive={pathname === "/learn-first-aid-app"}
        />
        <MenuItem
          title="Gluten-Free Finder"
          variant="mobile"
          link="/gluten-free-finder-app"
          isActive={pathname === "/gluten-free-finder-app"}
        />
        <MenuItem title="Reduce Food Waste" variant="mobile" />
        <MenuItem title="Fashion Designer" variant="web" />
        <MenuItem title="About" />
      </div>

      <div className="mt-7 flex -mx-2">
        <div className="mx-2">
          <LinkedinIcon />
        </div>

        <div className="mx-2">
          <BehanceIcon />
        </div>

        <div className="mx-2">
          <DribbleIcon />
        </div>
      </div>
    </div>
  );
};
