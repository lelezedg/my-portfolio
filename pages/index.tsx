import { Card, Layout } from "../components";

export default function Home() {
  return (
    <Layout title="Home | eleneux.com">
      <div className="flex flex-col md:mt-16">
        <div className="md:-mx-6 flex flex-grow flex-col md:flex-row">
          <Card
            title="Learn First Aid"
            subtitle="App allows people to refresh their First Aid knowledge with illustrated articles and quizzes."
            image="first-aid-cover"
            backgroundStyle="bg-gradient-to-r from-blue-100 to-blue-200"
            link="/learn-first-aid-app"
          />

          <Card
            title="Gluten Free Finder"
            subtitle="App guides people to discover Gluten Free restaurants worldwide."
            image="gluten-free-cover"
            backgroundStyle="bg-gradient-to-r from-green-100 to-green-200"
            link="/gluten-free-finder-app"
          />
        </div>

        <div className="md:-mx-6 flex flex-grow flex-col md:flex-row">
          <Card
            title="Cleaning Company Website"
            subtitle="Responsive website for the cleaning company."
            image="cleantime-cover"
            backgroundStyle="bg-gradient-to-r from-pink-100 to-pink-200"
            link="/cleaning-company-website"
          />

          <Card
            title="Task Management"
            subtitle="Easy and smart tool to manage daily and upcoming tasks at work."
            image="task-cover"
            backgroundStyle="bg-gradient-to-r from-glacier-100 to-glacier-200"
            link="/task-management-app"
          />
        </div>

        <div className="md:-mx-6 flex flex-grow flex-col md:flex-row">
          <Card
            title="Reduce Food Waste"
            subtitle="App allows people to share Food & Grocery products with NGO communities."
            image="food-waste-cover"
            backgroundStyle="bg-gradient-to-r from-orange-100 to-orange-200"
            link="/reduce-food-waste-app"
          />

          <Card
            title="Fashion Designer's Website"
            subtitle="Responsive portfolio website, where people can find designer’s collection and contact details."
            image="marikone-cover"
            backgroundStyle="bg-gradient-to-r from-purple-100 to-purple-200"
            link="/fashion-designer-portfolio"
          />
        </div>
      </div>
    </Layout>
  );
}
