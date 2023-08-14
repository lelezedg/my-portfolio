import {
  Layout,
  ProjectFinal,
  ProjectHero,
  Section,
  SectionHeader,
  Text,
} from "../components";
import Image from "next/image";

const prototypeURL = "https://bit.ly/izomage";

export default function Page() {
  return (
    <Layout title="Project | Land Surveying Company Website">
      <div className="md:mt-16">
        <ProjectHero
          title="Land Surveying Company Website"
          subtile="Responsive website, logo redesign and brand book for the land surveying company."
          coverImage="gluten-free-hero"
          buttonLabel="View Prototype"
          navigationURL={prototypeURL}
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="Izoma LLC is an established land surveying company. Despite their proven success, they lacked an online presence. Izoma reached out to me to lead their digital transformation, which included creating a website and brand book, redesigning the logo and business cards."
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Project Duration"
            body="Product Designer"
            list={[
              "“Website design”",
              "“Logo redesign”",
              "“Business card design”",
              "“Brand Book”",
            ]}
            finalText="3 weeks"
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="The aim was to craft an informative, user-centric website, offering essential information like Izoma's services and contact details. Additionally, to develop a blog   to offer valuable insights to users and enhance the company's SEO efforts, accompanied by a comprehensive brand book."
            className="basis-1/3 mt-8"
          />
        </div>

        <Section
          title="Design System"
          body="I chose the Noto Sans Georgian typeface and the corresponding icon set because of their perfect match in shape and form. This alignment creates a seamless visual connection that enhances overall design cohesiveness. Moreover, Noto Sans Georgian's support for Latin, Georgian, and Russian characters allows me to maintain consistency throughout this multilingual website."
        />

        <div className="mt-12 mb-16">
          <Image
            src={`/assets/izoma-ds.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Business Card Design"
            body="The logo redesign brought about subtle yet transformative changes that yielded a significant impact. By incorporating slight modifications, the logo now exudes a modern and fresh essence that aligns seamlessly with the company's core operations. The refined design retains the company's heritage while imparting a renewed sense of relevance. This evolution not only enhances visual appeal but also reinforces a more compelling representation of the company's work and values."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/izoma-card.png`}
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
              src={`/assets/izoma-logo.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="Logo"
            body="The logo redesign brought about subtle yet transformative changes that yielded a significant impact. By incorporating slight modifications, the logo now exudes a modern and fresh essence that aligns seamlessly with the company's core operations. The logo blends a location pin 📍 and a ruler 📏, forming a visual representation that encapsulates Izoma LLC's land surveying services. This combination conveys the company's expertise and focus in a clear and memorable way, showcasing their specialized field through a carefully designed emblem."
            className="basis-1/2 mt-8 ml-4"
          />
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Understanding"
            body="When tasked with designing the website for Izoma LLC, a respected land surveying firm, I began by delving into research. This involved studying other companies in the same field to uncover prevailing design practices. By analyzing their websites, I gained valuable insights into what works effectively for users in this industry. This research provided me with a solid foundation to create a user-friendly website for Izoma LLC, incorporating proven design elements that resonate with their target audience and reflect industry standards."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/izoma-understanding.png`}
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
              src={`/assets/izoma-website.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="About the Website"
            body="Izoma LLC's homepage is a dynamic hub, spotlighting impressive statistics and an engaging 'About' section to connect with visitors. The comprehensive 'Services' segment concisely presents their diverse offerings, while a user-friendly contact form ensures easy communication. The 'Blog Highlights' section showcases their expertise through featured articles, solidifying Izoma LLC's credibility within the industry. This cohesive homepage delivers a rich visitor experience that embodies the company's professionalism and commitment to excellence."
            className="basis-1/2 mt-8 ml-4"
          />
        </div>

        <div className="md:mt-8 md:mb-4 flex md:flex-row flex-col">
          <Section
            title="Engaging users"
            body="My approach to Izoma LLC's website design was guided by thorough research into industry norms, ensuring a user-centered experience that encourages interaction. The concise 'About' section strategically funnels users to the prominent 'Contact Me' button, while also communicating the company's working hours, fostering trust. This design approach blends professionalism with effective user guidance, creating a seamless path for initiating contact."
            className="mt-24"
          />
        </div>

        <div className="mt-4">
          <Image
            src={`/assets/izoma-engaging-users.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-8 md:mb-4 flex md:flex-row flex-col">
          <Section
            title="Responsive Website"
            body="Website is fully responsive, providing seamless access across all devices, particularly mobile phones. With mobile devices being the primary browsing tool for Izoma’s customers, ensuring excellent responsiveness was a crucial aspect of the website's design."
            className="mt-24"
          />
        </div>

        <div className="mt-4">
          <Image
            src={`/assets/izoma-mockups.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-32 mt-24">
          <ProjectFinal
            navigationURL={prototypeURL}
            label="Click on the button if you’d like to check the website!"
            buttonLabel="View Website"
          />
        </div>
      </div>
    </Layout>
  );
}
