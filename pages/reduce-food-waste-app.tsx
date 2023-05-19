import {
  Layout,
  ProjectHero,
  Section,
  Text,
  ProjectFinal,
  SectionHeader,
} from "../components";
import Image from "next/image";

const prototypeURL = "bit.ly/reduce-waste-app";

export default function Page() {
  return (
    <Layout title="Project | Reduce Food Waste">
      <div className="md:mt-16 md:-mb-16">
        <ProjectHero
          title="Reduce Food Waste"
          subtile="App allows people to share Food & Grocery products with NGO communities."
          coverImage="food-waste-hero"
          buttonLabel="View Prototype"
          navigationURL={prototypeURL}
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="With this app, people are connected to the nonprofit organization - Katarthis which cares about homeless people by offering them daily meals. They can visit Katarthis cafe and have breakfast or dinner there. "
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Project Duration"
            list={["Product Designer", "UX Researcher"]}
            finalText="8 Weeks"
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="The goal was to design a solution for people who want to reduce their food waste and help others at the same time. "
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title" className="mt-16">
          Research
        </Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Research Method"
            body="In order to gather related information from other people and understand whether it’s a problem that needs to be solved, I’ve conducted 2 interviews. During the research, it became a lot more obvious that food waste is something my interviewees also think and worry about, I should mention that at that time I wasn’t really sure what would be the final product, but those interviews helped me to get some insights and come up with the ideas."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Some interview questions"
            list={[
              "What kind of food becomes wasted mostly in your house?",
              "How much food do your throw away in a week?",
              "What motivates or encourages you to reduce food waste?",
              "What challenges do you face while trying to reduce your waste?",
              "Have you ever encouraged others to reduce food waste? And how?",
              "Have you ever given away extra food from your house?",
            ]}
            className="basis-1/3 mt-8"
          />

          <Section
            title="Received Insights"
            list={[
              "Both of the participants are worried about food waste.",
              "Both of them are interested in teaching their children about that topic.",
              "When everyone in the family eats different food, reducing waste becomes difficult.",
              "Family members often buy products that become leftovers.",
              "There are always some expired products in the fridge.",
              "Throwing away rotten food makes them worried and ashamed.",
            ]}
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title" className="mt-16">
          Usability Tests
        </Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col-reverse">
          <Section
            title="Prototype & Scenarios for Tests"
            body="After analyzing the insights from the interviews I started creating low-fidelity wireframes and created the first prototype in Axure that was used for usability testing.
            Scenarios for Usability Tests"
            list={[
              "What do we see here? Please walk me through your options. What kind of information does the app provide at this point?",
              "Imagine you have some leftovers from the birthday party that you would like to share. Use our application to donate that food.",
              "Let’s say you want to see what you have sent already. Where could you find it?",
              "Imagine that you want to share some milk and yogurts. Use the app to submit your request.",
            ]}
            className="basis-1/3 md:mt-0 mt-8"
          />

          <Section
            title="Findings"
            list={[
              "The participant mentioned that he’d skip the onboarding screens in real life. - Need to explain the purpose of the app inside the application, not only on the onboarding screens.",
              "One of the participants was concerned whether products will be good for consumption by the time the courier comes to pick it up. - Explain how the couriers work.",
              "Not sure about the meaning of “Start saving food” and “Overall impact”. - Change the wording, for example to “Our community’s impact”",
              "Adding the expiration date of the product would be interesting. - Add input for the expiration date.",
            ]}
            className="basis-1/3 "
          />

          <div className="basis-1/3 md:mt-0 mt-8 flex justify-center">
            <Image
              src={`/assets/food-waste-usability.png`}
              width={250}
              height={150}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <Section
          title="User Journey"
          body="After usability testing, I created the user journey for the scenario where the person is worried about her food waste and the friend suggests downloading this application."
          className=""
        />

        <div className="mt-4 mb-32">
          <Image
            src={`/assets/food-waste-user-journey.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Text variant="title" className="mt-32">
          Design & Reasoning
        </Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Log In Screens"
            body="I shortened and simplified the registration process as much as possible and didn't include the number and address fields because:"
            list={[
              "Asking lots of info at the beginning bothers users.",
              "They might lose interest/motivation to continue.",
              "Asking that info while donating would be more relevant",
              "After the first donation, those details would be saved to their profile and would be easy to use next time",
            ]}
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/food-waste-login.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col-reverse">
          <div className="basis-1/2 mt-8 self-start">
            <Image
              src={`/assets/food-waste-home.png`}
              width={529}
              height={400}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="Home"
            body="Using the nav bar helped in avoiding the cluttered design and made the navigation easier. From the nav bar:"
            list={[
              "Users can navigate to ‘Your Donations’, where would be all their previous donations,",
              "using the action button in the middle starts the donation flow,",
              "users are able to click the community and see what others are donating.",
              "In order to encourage first-time users to take action, I've added a microcopy with an arrow and instructions for them to start donating, that’s an empty state.",
            ]}
            className="basis-1/2 mt-8 md:ml-24"
          />
        </div>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Ongoing Donation"
            body="When the user has an ongoing donation along with the donation history, the ongoing donation should stand out to draw the users' attention. To make it more prominent I’ve:"
            list={[
              "Created an extended version of the card where the most important info, such as courier details and arrival time is shown",
              "Added notification indication on the nav bar ",
            ]}
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/food-waste-donation.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <div className="md:mt-32 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="The Goal"
            body="Donating flow should be very simple and effortless otherwise people won't use it. Keeping that in mind, I tried to make the flow as easy as possible."
            className="basis-1/3 md:mt-0 mt-8"
          />

          <Section
            title="Donating Flow"
            body="Users can choose different kinds of products from the categories after clicking on continue, they will be asked for different details depending on the chosen products (for ex, apple - quantity, yogurt - quantity & expiration date). Then if he/she is a first-time user they will need to fill in personal information such as phone number and address. Users might be interested in tracking the courier, so on the ‘Thank you’ screen is a secondary button ‘Follow Courier’ that opens the map. "
            className="basis-1/3 "
          />

          <div className="basis-1/3 md:mt-0 mt-8 flex justify-center">
            <Image
              src={`/assets/food-waste-donation-flow.png`}
              width={194}
              height={400}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <div className="md:mt-32 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="What's next?"
            body="I believe that the overall mindset behind the intention of donation would need more exploration. Currently, there is an MVP of the community feature, where users can share their donations and see what others are sharing. If I'd continue working on this app, I would start with finding answers about the community feature, as well as conducting usability tests to discover how the existing design addresses users' pain points. There are some questions I’d consider first."
            className="basis-1/3 md:mt-0 mt-8"
          />

          <Section
            title="Some interview questions"
            list={[
              "How would people use the community?",
              "Is it the right motivational feature?",
              "Would they be interested in sharing and seeing others' donations?",
              "What would be the best way to create a community in such kind of application?",
              "What way would they prefer to measure products? How can I make this flow less time-consuming for the users?",
              "What would be the best way to show the users how their donations are spent, who receives those products, and when?",
            ]}
            className="basis-1/3 "
          />

          <div className="basis-1/3 md:mt-0 mt-8 flex justify-center">
            <Image
              src={`/assets/food-waste-next-steps.png`}
              width={194}
              height={400}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <SectionHeader title="App Screens" />

        <div className="mt-8">
          <Image
            src={`/assets/food-waste-screens.png`}
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
