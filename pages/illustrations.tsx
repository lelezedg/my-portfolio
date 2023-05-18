import { Card, Layout, Text } from "../components";
import Image from "next/image";

export default function Illustrations() {
  return (
    <Layout title="Illustrations | eleneux.com">
      <div className="md:mt-28 ">
        <div className="flex md:flex-row flex-col justify-between gap-6 my-8">
          <div className="relative md:w-[35vw] md:h-[25vw] w-[85vw] h-[70vw]">
            <Image
              src={`/assets/cosyroom.png`}
              fill
              alt="1"
              quality={100}
              className="rounded-lg"
            />
          </div>

          <div className="relative md:w-[25vw] md:h-[25vw] w-[85vw] h-[70vw]">
            <Image
              src={`/assets/shop.png`}
              fill
              alt="1"
              quality={100}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-6 my-8">
          <div className="relative md:w-[33vw] md:h-[25vw] w-[85vw] h-[100vw]">
            <Image
              src={`/assets/fall.jpg`}
              fill
              alt="1"
              quality={100}
              className="rounded-lg"
            />
          </div>

          <div className="relative md:w-[33vw] md:h-[25vw] w-[85vw] h-[100vw]">
            <Image
              src={`/assets/scary.jpg`}
              fill
              alt="1"
              quality={100}
              className="rounded-lg"
            />
          </div>

          <div className="relative md:w-[33vw] md:h-[25vw] w-[85vw] h-[100vw]">
            <Image
              src={`/assets/snow.jpg`}
              fill
              alt="1"
              quality={100}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-6 my-8">
          <div className="relative md:w-[25vw] md:h-[30vw] w-[85vw] h-[100vw]">
            <Image
              src={`/assets/babygirl.jpg`}
              fill
              alt="1"
              quality={100}
              className="rounded-lg"
            />
          </div>

          <div className="relative md:w-[35vw] md:h-[30vw] w-[85vw] h-[80vw]">
            <Image
              src={`/assets/desk.jpg`}
              fill
              alt="1"
              quality={100}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
