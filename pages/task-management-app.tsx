import {
  Layout,
  ProjectHero,
  Section,
  SectionHeader,
  Text,
  ProjectFinal,
} from "../components";
import Image from "next/image";

const prototypeURL = "https://bit.ly/offtasks";

export default function Page() {
  return (
    <Layout title="Project | Task Management App">
      <div className="md:mt-16">
        <ProjectHero
          title="Task Management App"
          subtile="Easy and smart tool to manage daily and upcoming tasks at work."
          coverImage="task-hero"
          buttonLabel="View Prototype"
          navigationURL={prototypeURL}
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="Offtasks is a task management web app that helps people manage daily and upcoming tasks. It offers an easy-to-use minimalistic interface and smart features to increase productivity, and better focus on top priorities."
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Project Duration"
            body="Product Designer & UX Researcher"
            finalText="2 Weeks"
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="To create a minimalistic and intuitive interface that simplifies the task management process, to make it easier for users to prioritize, manage, and track their tasks, while also providing necessary features and functionality to help users stay productive and achieve their goals."
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title" className="mt-16">
          Process and Design decisions
        </Text>

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Research"
            body="At the beginning of the project, I conducted a competitive analysis and compared various similar applications, including Todoist, Trello, Notion, and Google Tasks. I found that the interfaces of these applications can be quite complex and overwhelming. With this in mind, I sought to create a platform with a minimalist approach to simplify the user experience."
            className="basis-1/2 mt-8"
          />

          <div className="basis-1/2 mt-8">
            <Image
              src={`/assets/task-research.png`}
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
              src={`/assets/task-login.png`}
              width={1120}
              height={444}
              alt="1"
              quality={100}
            />
          </div>

          <Section
            title="Log In"
            body="The web-app has a straightforward login and registration process, requiring users to register using only their email and password. In addition, I included an 'I am a Guest' option for those who may wish to preview the interface without committing to creating an account at the very beginning. This feature balances accessibility and privacy, allowing for a more comprehensive user experience."
            className="basis-1/2 mt-8"
          />
        </div>

        <div className="md:mt-8 md:mb-4 flex md:flex-row flex-col">
          <Section
            title="Light & Dark Themes"
            body="Providing both modes gives users more control over the look and feel of the app, making it more accessible and customizable to their needs."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Dashboard"
            body="In the dashboard, users can see their tasks for today, tomorrow, and the upcoming days all in one place, making it easier to keep track of their tasks easily."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Ivy Lee’s Task Management Method"
            body="This method involves making a list of the six most crucial tasks for the next day. Any tasks that were not completed are moved to the following day. On the app, tasks that were left unfinished from the previous day are highlighted in red to make them easily distinguishable from new tasks."
            className="basis-1/3 mt-8"
          />
        </div>

        <div className="mt-8">
          <Image
            src={`/assets/task-themes.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-8 md:mb-4 flex md:flex-row flex-col">
          <Section
            title="Creating new tasks"
            body="Adding a new task should be one of the simplest things to do within the app. That's why there is an 
            Add Task' button next to each section, providing easy access to each category. Upon clicking the button, a modal appears where you can describe the task. There is also an option to select whether it's a task for today, tomorrow, or the future."
            className="mt-24"
          />
        </div>

        <div className="mt-4">
          <Image
            src={`/assets/task-creating-new.png`}
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
