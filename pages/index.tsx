import { Card, Layout } from "../components";

export default function Home() {
  return (
    <Layout title="eleneux.com">
      <div className="flex flex-col">
        <div className="md:ml-24 md:-mx-6 flex flex-grow flex-col md:flex-row">
          <Card
            title="Learn First Aid"
            subtitle="App allows people to refresh their First Aid knowledge with illustrated articles and quizzes."
            image="first-aid-hero"
            backgroundStyle="bg-gradient-to-r from-blue-100 to-blue-200"
          />

          <Card
            title="Gluten Free Finder"
            subtitle="App guides people to discover Gluten Free restaurants worldwide."
            image="gluten-free-hero"
            backgroundStyle="bg-gradient-to-r from-green-100 to-green-200"
          />
        </div>

        <div className="md:ml-24 md:-mx-6 flex flex-grow flex-col md:flex-row">
          <Card
            title="Reduce Food Waste"
            subtitle="App allows people to share Food & Grocery products with NGO communities."
            image="food-waste-hero"
            backgroundStyle="bg-gradient-to-r from-orange-100 to-orange-200"
          />

          <Card
            title="Fashion Designer's Website"
            subtitle="Responsive portfolio website, where people can find designer’s collection and contact details."
            image="marikone-hero"
            backgroundStyle="bg-gradient-to-r from-purple-100 to-purple-200"
          />
        </div>
      </div>
    </Layout>
  );
}
