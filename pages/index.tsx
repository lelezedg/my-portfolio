import React from 'react';
import { Layout, Card } from '../components';
import content from '../content/home.json';

export default function Home() {
  return (
    <Layout title={content.pageTitle}>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:mt-16">
        {content.cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <Card
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              backgroundStyle={card.backgroundStyle}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
