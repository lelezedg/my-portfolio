import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "./Text";

type TCard = {
  title: string;
  subtitle: string;
  image?: string;
  color?: string;
  link?: string;
};

export const Card = ({
  title,
  subtitle,
  image,
  color,
  link = "/",
}: TCard) => {

  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    switch (link) {
      case "/learn-first-aid-app":
        setBackgroundColor("bg-gradient-to-r from-blue-100 to-blue-200");
        break;
      case "/gluten-free-finder-app":
        setBackgroundColor("bg-gradient-to-r from-green-100 to-green-200");
        break;
      case "/reduce-food-waste-app":
        setBackgroundColor("bg-gradient-to-r from-pink-100 to-pink-200");
        break;
      case "/fashion-designer-portfolio":
        setBackgroundColor("bg-gradient-to-r from-glacier-100 to-glacier-200");
        break;
      case "/task-management-app":
        setBackgroundColor("bg-gradient-to-r from-orange-100 to-orange-200");
        break;
      case "/cleaning-company-website":
        setBackgroundColor("bg-gradient-to-r from-purple-100 to-purple-200");
        break;
      case "/izomage":
        setBackgroundColor("bg-gradient-to-r from-green-100 to-green-200");
        break;
    }
  }, [link]);
  
  
  return (
    <Link className="flex flex-col mb-12 " href={link}>
      <div
        className={`md:h-[300px] h-64 mb-4 rounded flex justify-center items-center transition duration-300 md:hover:scale-105 ${backgroundColor}`}
      >
        {image && (
          <Image
            src={`/assets/${image}.png`}
            width={300}
            height={300}
            alt="1"
            quality={30}
          />
        )}
      </div>
      <Text variant="subtitle" className="mb-2">
        {title}
      </Text>

      <Text variant="body">{subtitle}</Text>
    </Link>
  );
};
