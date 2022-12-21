import React from "react";
import { BehanceIcon, DribbleIcon, LinkedinIcon } from "../icons";
import { MenuItem } from "./MenuItem";
import { useRouter } from "next/router";
import { Text } from "./Text";

export const Menu = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex flex-col h-screen justify-center self-center items-end text-end">
      <div className="mb-7">
        <Text variant="headline">Hi, I&apos;m Elene</Text>
        <Text variant="body">UX/UI Designer</Text>
      </div>

      <div className="flex flex-col">
        <MenuItem title="Home" link="/" isActive={pathname === "/"} />
        <MenuItem
          title="Learn First Aid"
          variant="mobile"
          link="/learn-first-aid-app"
          isActive={pathname === "/learn-first-aid-app"}
        />
        <MenuItem title="Gluten-Free Finder" variant="mobile" />
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
