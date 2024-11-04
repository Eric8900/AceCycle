import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import BlurIn from "./ui/blur-in";
import { Iphone15Pro } from "./ui/iphone-15-pro";

export function About() {
  const cards = data.map((card) => (
    <Card key={card.src} card={card} />
  ));
  return (
    <div>
      <BlurIn margin={"-100px"} delay={0.4} className="text-center md:text-8xl text-7xl text-gray-800 py-36 mx-10">
        What <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">we</b> do
      </BlurIn>
      <div className="overflow-x-hidden">
        <Carousel items={cards} />
      </div>
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
      <div className="flex flex-col lg:flex-row mt-32 w-full shadow-[inset_0_12px_24px_-12px_rgb(0,0,0,0.3)] bg-gradient-to-b from-green-100 to-white">
        <div className="flex flex-col justify-center items-center w-full text-center">
          <BlurIn margin={"-100px"} className="text-lg sm:text-xl text-black font-light mt-32 lg:mt-0">Now on the App Store</BlurIn>
          <BlurIn margin={"-100px"} className="text-4xl sm:text-6xl lg:text-5xl text-center mb-10">
            The&nbsp;
            <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent font-extrabold">
              AceCycle&nbsp;
            </b>
            App
          </BlurIn>
          <Iphone15Pro className="size-[85%] sm:size-[65%] md:size-[45%] lg:size-[70%] drop-shadow-2xl" src="https://acecycleassets.vercel.app/acecycle_app.jpeg" />
        </div>
        <div className="flex flex-col justify-center items-center w-full text-center mt-32 lg:mt-0 lg:mx-10">
          <BlurIn margin={"-100px"} className="text-4xl sm:text-5xl text-center mb-10">
            <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent font-bold">Scan On Phone</b>
            &nbsp;or&nbsp;
            <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent font-bold">Click</b>
          </BlurIn>
          <a 
          target="_blank" rel="noopener noreferrer"
          href="https://apps.apple.com/us/app/acecycle/id6608989018" 
          className="hover:scale-[1.015] transition-all duration-200 ease-in-out">
            <img src="https://acecycleassets.vercel.app/acecycle_app_qr.png" alt="https://apps.apple.com/us/app/acecycle/id6608989018" width={500} height={500} className="rounded-2xl"/>
          </a>
          <h2 className="text-2xl sm:text-3xl text-black mt-10">
            Tracking Your Recycling, &nbsp;
            <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent font-extrabold">
              Made Easier
            </b>
            .
          </h2>
        </div>
      </div>
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
      "https://acecycleassets.vercel.app/about_9.jpg",
  },
  {
    title: "Our Vision",
    description: (
      <>
        We envision a world where sustainability is interwoven with every aspect of our lives, including the sports we love. In our ideal future, no tennis ball ends its journey in a landfill, but rather contributes to a cycle of continuous reuse and repurposing. Our vision extends beyond recycling; it's about changing the narrative around waste and inspiring communities to adopt more environmentally conscious practices. We dream of expanding our reach, not just within our local communities but across the globe, to create a network of tennis enthusiasts and environmental advocates working together for a greener tomorrow.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/about_8.jpg",
  },
  {
    title: "Our Mission",
    description: (
      <>
        Our mission is simple yet ambitious: to recycle and repurpose tennis balls, reducing environmental waste and promoting sustainability within the tennis community and beyond. We are committed to collecting used tennis balls from clubs, schools, and public courts, diverting them from landfills, and finding innovative ways to give them a new lease on life. Whether it's through creating new tennis court surfaces, designing dog toys, or exploring other creative uses, we are dedicated to finding solutions that benefit our planet. Through education, community engagement, and collaboration, we aim to raise awareness about the importance of recycling and inspire action towards a more sustainable world. Together, we can serve up a better future for our planet, one tennis ball at a time.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/dog_chew_tennis.jpg",
  },
];

const numbersToSkip = [8, 9];
const data = Array.from({ length: 18 })
  .map((_, i) => i + 1)
  .filter(num => !numbersToSkip.includes(num))
  .map(num => ({
    title: "Tennis Balls",
    src: `https://acecycleassets.vercel.app/about_${num}.jpg`
  }))
  .sort(() => Math.random() - 0.5);