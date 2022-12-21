import React from "react";
import Image from "next/image";
import { Text } from "./Text";
import { useRouter } from "next/router";
import { Button } from "./Button";

type TProjectHero = {
  title: string;
  subtile: string;
  coverImage: string;
  buttonLabel: string;
  navigationURL?: string;
};

export const ProjectHero = ({
  title,
  subtile,
  coverImage,
  navigationURL = "/",
  buttonLabel,
}: TProjectHero) => {
  const router = useRouter();

  return (
    <div className="flex flex-grow flex-row mb-32">
      <div className="flex flex-col justify-end">
        <Text variant="headline">{title}</Text>
        <Text variant="body" className="mt-2 mb-8">
          {subtile}
        </Text>

        <div>
          <Button
            onClick={() => router.push(`/${navigationURL}`)}
            className="mb-24"
            label={buttonLabel}
          />
        </div>
      </div>

      <div className="">
        <Image
          src={`/assets/${coverImage}.png`}
          width={900}
          height={500}
          alt="_"
        />
      </div>
    </div>
  );
};
