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
      <div id="gallery">
        <BlurIn margin={"-100px"} delay={0.4} className="text-center md:text-8xl text-7xl text-gray-800 py-36 mx-10">
          What we <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">do</b>
        </BlurIn>
        <div className="overflow-x-hidden">
          <Carousel items={cards} />
        </div>
      </div>
      <div id="about">
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
      <div id="acecycleapp">
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
            <Iphone15Pro className="size-[85%] sm:size-[65%] md:size-[45%] lg:size-[70%] drop-shadow-2xl" src="https://acecycleassets.vercel.app/acecycle_app.png" />
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
              <img src="https://acecycleassets.vercel.app/acecycle_app_qr.png" alt="https://apps.apple.com/us/app/acecycle/id6608989018" width={500} height={500} className="rounded-2xl" />
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
    </div>
  );
}

const content = [
  {
    title: "Our Story",
    description: (
      <>
        Our journey began on the sunny courts of Austin, Sugar Land, and Katy, Texas, where a group of high school tennis players and students found a shared passion not just for the game, but for the environment that surrounds it. United in our love of tennis and an increasing sensitivity to the environment, we started to realize how many tennis balls were considered "no longer playable" and were sent to landfills. We saw potential where others saw waste. In an innovative and environmentally friendly manner, we sought to give these tennis balls a second life. Thus, our nonprofit was born out of the belief that we could make a difference, one tennis ball at a time.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/about_9.jpg",
  },
  {
    title: "Our Vision",
    description: (
      <>
        Imagine a world where sustainability will be synonymous with every part of our lives, including the sport we adore. That was what we first envisioned when we started AceCycle. In a perfect future, no tennis ball has to land in a landfill; instead, it takes part in a circle of non-stop reuse and repurposing. Our vision is one beyond recycling but changing the way people talk about trash and building communities that have a deep understanding of the environment. We strive to not only reach local communities but worldwide to develop a wide connection with all tennis players collaborating in efforts toward a greener tomorrow.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/about_8.jpg",
  },
  {
    title: "Our Mission",
    description: (
      <>
        Our mission is quite simple yet ambitious at scale: to recycle and repurpose tennis balls in order to reduce environmental waste and promote sustainability within the tennis community and beyond. We are dedicated to collecting used tennis balls from clubs, schools, and public courts to divert them from landfills into innovative ways of giving them a new lease on life. Be it innovating new tennis court surfaces, designing dog toys, or further uses in other creative manners, we pledge our efforts to seek those solutions which would help the benefitting of our planet. Together, we can serve up a better future for our planet, one tennis ball at a time.
      </>
    ),
    image:
      "https://acecycleassets.vercel.app/dog_chew_tennis.jpg",
  },
];

const numbersToSkip = [8, 9];
const data = Array.from({ length: 19 })
  .map((_, i) => i + 1)
  .filter(num => !numbersToSkip.includes(num))
  .map(num => ({
    title: "Tennis Balls",
    src: `https://acecycleassets.vercel.app/about_${num}.jpg`
  }))
  .sort(() => Math.random() - 0.5);
