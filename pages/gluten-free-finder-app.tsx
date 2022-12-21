import { Layout, ProjectHero, Section, Text } from "../components";

export default function Page() {
  return (
    <Layout title="Project | Gluten Free Finder App">
      <div className="md:mt-16">
        <ProjectHero
          title="Gluten Free Finder"
          subtile="App guides people to discover Gluten-Free restaurants worldwide."
          coverImage="gluten-free-hero"
          buttonLabel="View Prototype"
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-8 md:mb-24 flex flex-row">
          <Section
            title="Background"
            body="The app is designed for people who are interested in first-aid. The First Aid app will teach you how to handle yourself and injured people and how to behave during floods, earthquakes, and other natural disasters. The app aims to provide useful information and make the learning process easier and pleasurable."
            className="basis-1/3"
          />

          <Section
            title="The Goal"
            body="Develop a solution that helps people learn how to handle injuries or natural disasters."
            className="basis-1/3"
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
            className="basis-1/3"
          />
        </div>

        <Text variant="title">Understanding the User</Text>

        <div className="md:mt-8 md:mb-24 flex flex-row">
          <Section
            title="Research"
            body="I've conducted user interviews and got lots of insights. Most interview participants reported that they don't have enough information about first aid, and never had the opportunity to learn. The feedback received through research made it clear, that users are willing to get basic information on how to behave during an emergency if they had an easy-to-use tool to help them."
            className="basis-1/3"
          />

          <Section
            title="Problem Statement #1"
            body="Based on the research insights I’ve created 2 personas and problem statements: 
            Stella is a part-time graphic designer and mom, who needs to find a platform that she will use in teaching her kid first aid."
            className="basis-1/3"
          />

          <Section
            title="Problem Statement #2"
            body="Based on the research insights I’ve created 2 personas and problem statements: Jennifer is a full-time student who needs an app that teaches her how to handle emergencies to get used to living alone."
            className="basis-1/3"
          />
        </div>
      </div>
    </Layout>
  );
}
