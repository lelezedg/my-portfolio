import {
  Layout,
  ProjectFinal,
  ProjectHero,
  Section,
  SectionHeader,
  Text,
} from "../components";
import Image from "next/image";

const prototypeURL =
  "https://www.figma.com/proto/RMGOoiFKZlpysEcjEb6BFu/Gluten-Free-Restaurant-Finder-(Copy)?node-id=103%3A8632&scaling=scale-down&page-id=0%3A1&starting-point-node-id=103%3A8632&show-proto-sidebar=1";

export default function Page() {
  return (
    <Layout title="Project | Gluten Free Finder">
      <div className="md:mt-16">
        <ProjectHero
          title="Gluten Free Finder"
          subtile="App guides people to discover Gluten-Free restaurants worldwide."
          coverImage="gluten-free-hero"
          buttonLabel="View Prototype"
          navigationURL={prototypeURL}
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="The research was initially done for this project, and I was given essential insights from the user interviews. With that information in hand, I came up with solutions and created UI designs that were user-focused."
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Project Duration"
            body="UX/UI Designer"
            finalText="1-Week UX/UI Challenge"
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="The goal was to create a user-friendly application to help people find gluten-free restaurants anywhere."
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title">Understanding the User</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Research"
            body="To better understand and empathize with consumers, I began researching gluten intolerance and celiac disease. Then, I came up with some desirable features according to my findings and the given insights:"
            className="basis-1/3 mt-8"
          />

          <Section
            title="User Insights"
            list={[
              "“Finding gluten-free places during my travels is very painful. If I’m lucky I can find a dedicated gluten-free restaurant, otherwise it’s very hard for me to trust a place. The risk of cross-contamination in a regular kitchen is just too high.”",
              "“It’s not just about being gluten-free, but the culinary experience. Just because I’m sensitive to gluten it doesn’t mean I don’t want to have a romantic dinner during my holidays with my partner.”",
              "“Gluten-free bakeries and restaurants can be overly expensive, it would be great to discover those within a reasonable price range close to me.”",
              "“I usually revisit the gluten-free places where I had a good impression, but I tried so many, that it is hard to keep track of them.”",
            ]}
            className="basis-1/3 mt-8"
          />

          <Section
            title="Solutions"
            list={[
              "The users should be able to easily find a new restaurant with their specifications.",
              "The users find it useful to read about restaurant reviews.",
              "They’d love to save favorite restaurants in a list and share the list with others.",
              "Customers would like to know how pricey the place is, so in the descriptions should be price indicators.",
              "A big part of the users would be travelers, they might be tired and hungry, and most likely they are using the app with a low phone battery after taking lots of photos, so I thought the app should have a dark mode as well to save the battery.",
              "The app should support several languages to be useful for travelers.",
            ]}
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title">Design and Reasoning</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Introduction Screens"
            body="I think for a better experience, every app should have some introduction page to communicate with the users what the app is about before they ask to create an account or log in. So I added 3 introduction screens."
            className="basis-1/2 mt-8"
          />

          <Section
            title="Log In options"
            body="Then I decided to add different login options, with all popular social accounts as well as just email sign-ups, to make sure all users can sign in. I also added the forgot password screen in case someone needs to reset their account password."
            className="basis-1/2 mt-8"
          />
        </div>

        <div className="mt-8 mb-16">
          <Image
            src={`/assets/gluten-free-introduction.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Section
          title="Home"
          body="After logging in, the app should be easy to navigate, so I chose a taskbar for navigation. Users can scroll up or down the list view on the map."
        />

        <div className="mt-12 mb-16">
          <Image
            src={`/assets/gluten-free-home.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Section
          title="Profile"
          body="From the Task Bar user are able to navigate to the profile screen where they can choose the language or theme of the app, log out and get help."
        />

        <div className="mt-12 mb-16">
          <Image
            src={`/assets/gluten-free-profile.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Section
          title="Favorites & Share"
          body="Users can navigate to the favorites list where the saved restaurants are and read more about them, remove them from the list, or share the entire list."
        />

        <div className="mt-12 mb-16">
          <Image
            src={`/assets/gluten-free-favorites.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Section
          title="Filter"
          body="Using the filter users are able to easily find a restaurant with their specifications. For eg, they can filter by food category, restaurant type, opening hours etc. That feature makes the app much more convenient and easy to use."
        />

        <div className="mt-12 mb-16">
          <Image
            src={`/assets/gluten-free-filter.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Section
          title="Reviews & Price indicators"
          body="Gluten-free bakeries and restaurants are often overly expensive. So, before visiting the place would be great to have an overall idea of how pricey it is. Price indicators and customer reviews would be helpful for this. Hence, there is a restaurant info page where users can read their descriptions and reviews, make a call to reserve, get restaurants' locations to navigate, write reviews after visiting and add them to their favorite list."
        />

        <div className="mt-12 mb-20">
          <Image
            src={`/assets/gluten-free-reviews.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <SectionHeader title="Light and Dark Themes" />

        <div className="mt-4 mb-16">
          <Image
            src={`/assets/gluten-free-screens.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Text variant="title">Design System</Text>

        <div className="md:mt-2 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Colors"
            body="I chose a white background and metallic silver as a primary color. There is a lot of reading in the app, so I needed color which would not be annoying for users' eyes, which would be solid and clean. Also, the white and silver color is kind of kitchen colors, like a white dining table with white dishes, silver spoons, and forks, a white chef's uniform with silver pots and pans. So that is how I got the idea. "
            className="basis-1/2 mt-8"
          />

          <Section
            title="Typeface & Iconography"
            body="Used typeface - Cera Pro is very clean and easy to read. The letters are based on pure geometry, and it has almost all language support so when the app is multilingual it will be easy to read for everyone around the world. Also, chosen tiny icons because of the minimalist's design approach."
            className="basis-1/2 mt-8"
          />
        </div>

        <div className="mt-4">
          <Image
            src={`/assets/gluten-free-design-system.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-72 mt-24">
          <ProjectFinal navigationURL={prototypeURL} />
        </div>
      </div>
    </Layout>
  );
}
