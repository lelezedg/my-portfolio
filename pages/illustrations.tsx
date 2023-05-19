import { Layout } from "../components";
import Image from "next/image";
import Cosyroom from "../public/assets/cosyroom.png";
import ShopImage from "../public/assets/shop.png";
import FallImage from "../public/assets/fall.png";
import ScaryImage from "../public/assets/scary.png";
import SnowImage from "../public/assets/snow.png";
import BabyGirlImage from "../public/assets/babygirl.png";
import DeskImage from "../public/assets/desk.png";
import HillImage from "../public/assets/hill.png";
import FireGIF from "../public/assets/fire.gif";
import FrogImage from "../public/assets/frog.png";
import CatImage from "../public/assets/cat.png";
import PurpleRoomImage from "../public/assets/purpleroom.png";
import OctopusGIF from "../public/assets/Octopus.gif";

import RocketGIF from "../public/assets/rocket.gif";

export default function Illustrations() {
  return (
    <Layout title="Illustrations | eleneux.com">
      <div className="md:mt-28 ">
        <div className="flex md:flex-row justify-between flex-col items-center gap-6 my-6">
          <div className="basis-[60%]">
            <Image
              src={Cosyroom}
              alt="1"
              className="rounded-lg md:h-[400px] h-[300px]"
              quality={30}
            />
          </div>

          <div className="basis-[40%]">
            <Image
              src={ShopImage}
              alt="2"
              className="rounded-lg md:h-[400px] h-[300px]"
              quality={30}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-6 my-6">
          <div className="basis-1/3">
            <Image
              src={FallImage}
              alt="1"
              quality={30}
              className="rounded-lg md:h-[400px] h-[400px]"
            />
          </div>

          <div className="basis-1/3">
            <Image
              src={ScaryImage}
              alt="1"
              quality={30}
              className="rounded-lg md:h-[400px] h-[400px]"
            />
          </div>

          <div className="basis-1/3">
            <Image
              src={SnowImage}
              alt="1"
              quality={30}
              className="rounded-lg md:h-[400px] h-[400px]"
            />
          </div>
        </div>

        <div className="flex md:flex-row justify-between flex-col items-center gap-6 my-6">
          <div className="basis-[40%]">
            <Image
              src={BabyGirlImage}
              alt="2"
              className="rounded-lg md:h-[450px] h-[400px]"
              quality={30}
            />
          </div>

          <div className="basis-[60%]">
            <Image
              src={DeskImage}
              alt="1"
              className="rounded-lg md:h-[450px] h-[250px]"
              quality={30}
            />
          </div>
        </div>

        <div className="flex md:flex-row justify-between flex-col items-center gap-6 my-6">
          <div className="">
            <Image
              src={HillImage}
              alt="2"
              className="rounded-lg md:h-[600px] h-[250px]"
              quality={30}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-6 my-6">
          <div className="basis-1/3">
            <Image
              src={FireGIF}
              alt="1"
              quality={30}
              className="rounded-lg md:h-[400px] h-[400px]"
            />
          </div>

          <div className="basis-1/3">
            <Image
              src={FrogImage}
              alt="1"
              quality={30}
              className="rounded-lg md:h-[400px] h-[400px]"
            />
          </div>

          <div className="basis-1/3">
            <Image
              src={CatImage}
              alt="1"
              quality={30}
              className="rounded-lg md:h-[400px] h-[350px]"
            />
          </div>
        </div>

        <div className="flex md:flex-row justify-between flex-col items-center gap-6 my-6">
          <div className="basis-[60%]">
            <Image
              src={PurpleRoomImage}
              alt="1"
              className="rounded-lg md:h-[400px] h-[250px]"
              quality={30}
            />
          </div>

          <div className="basis-[40%]">
            <Image
              src={OctopusGIF}
              alt="2"
              className="rounded-lg md:h-[400px] h-[300px]"
              quality={30}
            />
          </div>
        </div>

        <div className="flex md:flex-row justify-between flex-col items-center gap-6 my-6">
          <div className="">
            <Image
              src={RocketGIF}
              alt="2"
              className="rounded-lg md:h-[700px] h-[250px]"
              quality={30}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
