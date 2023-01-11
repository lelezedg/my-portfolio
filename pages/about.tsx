import { Card, Layout, Text } from "../components";
import Image from "next/image";

export default function About() {
  return (
    <Layout title="About | eleneux.com">
      <div className="flex md:flex-row flex-col-reverse md:mt-32 ">
        <div className="basis-2/3 md:pr-24">
          <Text variant="title">About Me</Text>

          <Text variant="body" className="mt-4">
            I&apos;m Elene, UX/UI Designer with a mission to create delightful
            experiences and lovable products for people! Ever since childhood,
            I’ve wondered why people make the decisions they do, and find it
            exciting to guess others&apos; emotions, thoughts, or motivations.
            I&apos;ve always loved putting myself in someone else&apos;s shoes
            and later realized that it’s a superb skill named empathy.
            That&apos;s one reason why UX design is so enjoyable to me.
          </Text>

          <Text variant="body" className="mt-4">
            The skills and views I’ve gained during my BA (Engineering and
            Computer Science) are essential to UX design. After graduating, I
            became interested in graphic design and worked on freelance
            projects, which led me to take UX Design courses at Google, Idxf,
            and DesignLab. Completing those comprehensive courses helped me
            become a confident UX designer.
          </Text>

          <Text variant="body" className="mt-4">
            I continued my career in UX research, did several research projects,
            and worked as a UX Researcher at the Bank of Georgia.
          </Text>

          <Text variant="body" className="mt-4">
            I truly enjoyed being UX Researcher and gained remarkable experience
            that makes me very comfortable working with other researchers.
            During that time, I realized I wanted the entire package of UX, and
            wanted to use my other design skills too. That&apos;s how I moved to
            a design agency as a Product Designer.
          </Text>

          <Text variant="body" className="mt-4">
            Outside work, you can find me roller skating! 🛼
          </Text>
        </div>

        <div className="flex flex-col items-start">
          <Image
            src={`/assets/author.png`}
            width={256}
            height={256}
            alt="1"
            quality={100}
          />

          <div className="pt-8 mb-12">
            <Text variant="body">Contact At:</Text>
            <Text variant="body" className="text-link mt-1">
              elene.uxdesign@gmail.com
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  );
}
