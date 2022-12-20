import { Layout, PageHero, Section } from "../components";

export default function Page() {
  return (
    <Layout title="Learn First Aid App">
      <div className="md:mt-16">
        <PageHero
          title="Learn First Aid"
          subtile="App allows people to refresh their First Aid knowledge with simple illustrated fun Exams"
          coverImage="first-aid-hero"
          buttonLabel="View Prototype"
        />

        <h1 className="mb-8 font-bold text-xl">Project Overview</h1>

        <div className="flex flex-row basis-1/3">
          <Section
            title="Background"
            body="The app is designed for people who are interested in first-aid. The First Aid app will teach you how to handle yourself and injured people and how to behave during floods, earthquakes, and other natural disasters. The app aims to provide useful information and make the learning process easier and pleasurable."
          />

          <Section
            title="The Goal"
            body="Develop a solution that helps people learn how to handle injuries or natural disasters."
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
          />
        </div>
      </div>
    </Layout>
  );
}
