import { Card, Layout } from "../components";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="eleneux.com">
      <div className="flex flex-col">
        {/* <Image
          src="/assets/image1.png"
          width={390}
          height={507}
          alt="1"
          quality={30}
        /> */}

        <div className="md:ml-24 md:-mx-6 flex flex-grow flex-col md:flex-row">
          <Card
            title="Learn First Aid"
            subtitle="App allows people to refresh their First Aid knowledge with illustrated articles and quizzes."
          />

          <Card
            title="Gluten Free Finder"
            subtitle="App guides people to discover Gluten Free restaurants worldwide."
          />
        </div>

        <div className="md:ml-24 md:-mx-6 flex flex-grow flex-col md:flex-row">
          <Card
            title="Reduce Food Waste"
            subtitle="App allows people to share Food & Grocery products with NGO communities."
          />

          <Card
            title="Fashion Designer's Website"
            subtitle="Responsive portfolio website, where people can find designer’s collection and contact details."
          />
        </div>
      </div>
    </Layout>
  );
}
