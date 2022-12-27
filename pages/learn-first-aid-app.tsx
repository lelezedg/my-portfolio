import {
  Layout,
  ProjectHero,
  Section,
  SectionHeader,
  Text,
} from "../components";
import Image from "next/image";

export default function Page() {
  return (
    <Layout title="Project | Learn First Aid">
      <div className="md:mt-16">
        <ProjectHero
          title="Learn First Aid"
          subtile="App allows people to refresh their First Aid knowledge with simple illustrated fun Exams"
          coverImage="first-aid-hero"
          buttonLabel="View Prototype"
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="The app is designed for people who are interested in first-aid. The First Aid app will teach you how to handle yourself and injured people and how to behave during floods, earthquakes, and other natural disasters. The app aims to provide useful information and make the learning process easier and pleasurable."
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="Develop a solution that helps people learn how to handle injuries or natural disasters."
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Responsibilities"
            list={[
              "Product Designer & UX Researcher",
              "Conducting interviews & usability studies",
              "Digital wireframing",
              "Accounting for accessibility,",
              "Iterating on des",
              "Information architecture.",
            ]}
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title" className="mt-16">
          Understanding the User
        </Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Research"
            body="I've conducted user interviews and got lots of insights. Most interview participants reported that they don't have enough information about first aid, and never had the opportunity to learn. The feedback received through research made it clear, that users are willing to get basic information on how to behave during an emergency if they had an easy-to-use tool to help them."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Problem Statement #1"
            body="Based on the research insights I’ve created 2 personas and problem statements: 
            Stella is a part-time graphic designer and mom, who needs to find a platform that she will use in teaching her kid first aid."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Problem Statement #2"
            body="Based on the research insights I’ve created 2 personas and problem statements: Jennifer is a full-time student who needs an app that teaches her how to handle emergencies to get used to living alone."
            className="basis-1/3 mt-8"
          />
        </div>

        <SectionHeader title="Persona #1" />

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <div className="basis-1/3">
            <Image
              src={`/assets/persona-1.png`}
              width={300}
              height={278}
              alt="1"
              quality={100}
            />

            <div className="mt-4">
              <Text variant="subtitle">Stella, 32</Text>
              <Text variant="body">
                Lives in Tbilisi with 8 y/o daughter, has BA degree in
                marketing.
              </Text>
            </div>
          </div>

          <Section
            title="About"
            body="Stella has many responsibilities on a daily basis. She takes care of a daughter and works as a graphic designer part-time, she works mostly from home but goes into the office occasionally. Stella loves to travel, draw, read books, and loves her husband and 8-years-old kid. 
            Stella constantly cares about her child’s safety, but often has to deal with childhood injuries. Stella wants to teach her daughter how to behave if she falls down in the yard or cuts her hand. She needs her daughter to be prepared for emergencies."
            className="basis-1/3 md:mt-0 mt-8"
          />

          <div className="basis-1/3 md:mt-0 mt-8 flex flex-col">
            <Section
              title="Goals"
              list={[
                "To teach her 8 years old girl the basics of the first aid.",
                "To find a way to learn first aid.",
                "Be prepared for emergencies",
              ]}
              className="basis-1/3 "
            />

            <Section
              title="Frustrations"
              list={[
                "There are no platforms that can be used when teaching first aid to a daughter.",
                "Lots of people who don't know how to behave in an emergency, which makes Stella feel unsafe.",
              ]}
              className="basis-1/3 mt-4"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
