import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import BlurIn from "./ui/blur-in";

export function About() {
  const cards = data.map((card) => (
    <Card key={card.src} card={card} />
  ));
  return (
    <div className="overflow-x-hidden">
      <BlurIn className="text-center md:text-8xl text-7xl text-gray-800 py-36 mx-10">
        What <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">we</b> do
      </BlurIn>
      <Carousel items={cards} />
      <TracingBeam className="px-6 mt-36">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative px-8">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">

              <p className={twMerge("md:text-3xl text-2xl mb-4 text-lime-700")}>{item.title}</p>

              <div className="text-sm md:text-lg prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="thumbnail"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const content = [
  {
    title: "Our Story",
    description: (
      <>
        Our journey began on the sunlit courts of Austin, Sugar Land, and Katy, Texas, where we, a group of avid tennis players and students, discovered a shared passion not just for the game, but for the environment that surrounds it. United by our love for tennis and a growing concern for sustainable practices, we noticed the abundance of tennis balls that were deemed no longer playable and destined for landfills. We saw potential where others saw waste. Driven by a spirit of innovation and environmental stewardship, we embarked on a mission to give these tennis balls a second life. Thus, our nonprofit was born out of the belief that we could make a difference, one tennis ball at a time.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/about_1.jpg",
  },
  {
    title: "Our Vision",
    description: (
      <>
        We envision a world where sustainability is interwoven with every aspect of our lives, including the sports we love. In our ideal future, no tennis ball ends its journey in a landfill, but rather contributes to a cycle of continuous reuse and repurposing. Our vision extends beyond recycling; it's about changing the narrative around waste and inspiring communities to adopt more environmentally conscious practices. We dream of expanding our reach, not just within our local communities but across the globe, to create a network of tennis enthusiasts and environmental advocates working together for a greener tomorrow.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/about_2.jpg",
  },
  {
    title: "Our Mission",
    description: (
      <>
        Our mission is simple yet ambitious: to recycle and repurpose tennis balls, reducing environmental waste and promoting sustainability within the tennis community and beyond. We are committed to collecting used tennis balls from clubs, schools, and public courts, diverting them from landfills, and finding innovative ways to give them a new lease on life. Whether it's through creating new tennis court surfaces, designing dog toys, or exploring other creative uses, we are dedicated to finding solutions that benefit our planet. Through education, community engagement, and collaboration, we aim to raise awareness about the importance of recycling and inspire action towards a more sustainable world. Together, we can serve up a better future for our planet, one tennis ball at a time.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/about_3.jpg",
  },
];

const data = [
  {
    title: "Tennis Balls",
    src: "https://acecycleassets.vercel.app/about_4.jpg",
  },
  {
    title: "Tennis Balls",
    src: "https://acecycleassets.vercel.app/about_5.jpg",
  },
  {
    title: "Tennis Balls",
    src: "https://acecycleassets.vercel.app/about_6.jpg",
  },
  {
    title: "Tennis Balls",
    src: "https://acecycleassets.vercel.app/about_7.jpg",
  },
];