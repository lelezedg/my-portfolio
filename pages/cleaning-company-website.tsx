import {
  Layout,
  ProjectHero,
  Section,
  SectionHeader,
  Text,
  ProjectFinal,
} from "../components";
import Image from "next/image";

const prototypeURL = "https://bit.ly/clean-time";

export default function Page() {
  return (
    <Layout title="Project | Task Management App">
      <div className="md:mt-16">
        <ProjectHero
          title="Cleaning Company Website"
          subtile="Responsive website for the cleaning company."
          coverImage="cleantime-hero"
          buttonLabel="View Website"
          navigationURL={prototypeURL}
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="Clean Time is a newly established cleaning service company that aims to make a mark in the industry by providing exceptional cleaning services and surpassing competitors through a strong online presence. The website showcases their services, testimonials, contact information, completed work, and key statistics."
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Project Duration"
            body="Product Designer & UX Researcher"
            finalText="1 Weeks"
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="The primary goal was to create a user-centric website that enhances user experience, communicates services effectively, and drives conversions. The secondary goals included a visually appealing design, mobile optimization, and integrating social proof for trust-building."
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title" className="mt-16">
          Process and Design decisions
        </Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Research"
            body="The research phase involved conducting in-depth analysis of the target audience and competitors in the cleaning service industry. This included understanding the needs of busy professionals and families seeking reliable cleaning services and evaluating competitor websites to identify areas of strength and weakness. The insights gathered during this research phase served as a foundation for the strategic design and development of the Clean Time website."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/cleantime-research.png`}
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
              src={`/assets/cleantime-services.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="Services"
            body="The Services section provides a clear overview of Clean Time's range of cleaning services. Each service is described concisely, ensuring visitors understand the offerings, such as residential, commercial, deep cleaning, and specialized solutions. This organized presentation effectively showcases the breadth and quality of services."
            className="basis-1/2 mt-8 ml-4"
          />
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Contact Information"
            body="The Contact page enables easy communication between visitors and Clean Time. It includes a user-friendly contact form and essential contact details, facilitating streamlined and efficient communication. Multiple channels for contact ensure visitors can easily connect with Clean Time for inquiries or service scheduling."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/cleantime-contact.png`}
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
              src={`/assets/cleantime-reviews.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="Reviews"
            body="The website features a dedicated section for testimonials and reviews, building trust through positive client experiences. Each testimonial highlights specific aspects like professionalism and reliability. By prominently displaying these testimonials, Clean Time demonstrates its commitment to customer satisfaction, instilling confidence in potential clients."
            className="basis-1/2 mt-8 ml-4"
          />
        </div>

        <div className="md:mt-8 md:mb-4 flex md:flex-row flex-col">
          <Section
            title="Key Statistics"
            body="A dedicated section highlights key statistics about Clean Time's business, including the number of cleaned homes, professional staffers, happy clients, and years in business. These statistics establish credibility, demonstrating their experience and success in the industry. This feature reinforces Clean Time's reputation as a reliable and established cleaning service provider."
            className="mt-24"
          />
        </div>

        <div className="mt-4">
          <Image
            src={`/assets/cleantime-statistics.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-8 md:mb-4 flex md:flex-row flex-col">
          <Section
            title="Responsive Website"
            body="Website is fully responsive, providing seamless access across all devices, particularly mobile phones. With mobile devices being the primary browsing tool for Clean Time's customers, ensuring excellent responsiveness was a crucial aspect of the website's design. The responsive layout allows users to easily explore services, read testimonials, and contact the company while on the go. By prioritizing responsivity, Clean Time enhances user satisfaction and engagement, catering to the needs of their mobile-centric audience."
            className="mt-24"
          />
        </div>

        <div className="mt-4">
          <Image
            src={`/assets/cleantime-screens.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-64 mt-24">
          <ProjectFinal navigationURL={prototypeURL} />
        </div>
      </div>
    </Layout>
  );
}
