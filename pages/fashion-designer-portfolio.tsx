import {
  Layout,
  ProjectHero,
  Section,
  SectionHeader,
  Text,
  ProjectFinal,
} from "../components";
import Image from "next/image";

const prototypeURL = "https://bit.ly/marikone";

export default function Page() {
  return (
    <Layout title="Project | Fashion Designer">
      <div className="md:mt-16 md:-mb-16">
        <ProjectHero
          title="Fashion Designer’s Portfolio"
          subtile="Fashion designer's Responsive website, where people can find her collection and contact details."
          coverImage="marikone-hero"
          buttonLabel="View Website"
          navigationURL={prototypeURL}
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="Marikone is a creative fashion designer from Tbilisi, Georgia who has designed lots of different kinds of clothes and accessories. She wanted to have a simple, one-page website where people would be able to see her contact information and collections."
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Project Duration"
            list={["UX/UI Designer"]}
            finalText="1 Week"
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="The goal was to design a simple and easy-to-scan responsive website for the fashion designer, that she would use to introduce her work to the customers."
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title" className="mt-32">
          Wireframing
        </Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Basic Wireframes"
            body="During the wireframing, I created multiple sketches and iterations in order to define the best possible layout for the website. The goal was to design a simple page with the most important details in mind, such as, people should immediately recognize that this is a fashion designer’s portfolio website and show the latest designs of Marikone, little information about the author, popular products, and contact form. Here you can see the best option that I chose."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 md:-mt-24">
            <Image
              src={`/assets/marikone-basic-wireframes.gif`}
              width={500}
              height={300}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col-reverse">
          <div className="basis-1/2 mt-8 self-start">
            <Image
              src={`/assets/marikone-upgrading-wireframes.png`}
              width={529}
              height={400}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="Upgrading Wireframes"
            body="The brand Marikone has already had its own custom logo created and has been using light pink as a brand color for years. It was essential to keep the same tone and style as its customers already were familiar with. I’ve decided to use that pink as an accent color."
            className="basis-1/2 mt-8 md:ml-24"
          />
        </div>

        <Text variant="title" className="mt-32">
          Design and Reasoning
        </Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Introduction"
            body="For a portfolio website, it's essential to immediately let the people know what kind of website are they visiting. I choose to keep it simple and do it with a minimalistic title and make users interested by showing Marikone's latest collections. The collection section will always be updated with her recent work and people will be able to browse what kind of clothes Marikone creates."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/marikone-introduction.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col-reverse">
          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/marikone-sales.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="Top Sales Section"
            body="Marikone's niche product is a corset, which is her most popular product. For that reason, I decided that those products deserve to have a special section and offered her that idea. We ended up placing three corsets on that section."
            className="basis-1/2 mt-8"
          />
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col mb-12">
          <Section
            title="Contact & Locations"
            body="At the end of the page, there is provided a contact form and Marikone's store locations."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/marikone-contact.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <SectionHeader title="Responsive Website" />

        <div className="mt-8">
          <Image
            src={`/assets/marikone-responsive.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-32 mt-24">
          <ProjectFinal navigationURL={prototypeURL} />
        </div>
      </div>
    </Layout>
  );
}
