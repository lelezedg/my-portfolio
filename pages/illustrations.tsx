import { Layout } from "../components";
import Image from "next/image";
import Cosyroom from "../public/assets/cosyroom.png";
import ShopImage from "../public/assets/shop.png";

export default function Illustrations() {
  return (
    <Layout title="Illustrations | eleneux.com">
      <div className="md:mt-28 ">
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 my-8">
          <Image
            src={Cosyroom}
            alt="1"
            className="rounded-lg md:h-[30vw] h-[90vw]"
            quality={30}
          />
          <Image
            src={ShopImage}
            alt="2"
            className="rounded-lg md:h-[30vw] h-[90vw]"
            quality={30}
          />
        </div>

        {/* <div className="flex md:flex-row flex-col justify-between gap-6 my-8">
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
        </div> */}

        {/* <div className="flex md:flex-row flex-col justify-between gap-6 my-8">
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
        </div> */}
      </div>
    </Layout>
  );
}
