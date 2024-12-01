import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"

function AboutHero() {

  return (
    <>
      {/* <img src="/blurry-gradient-haikei.svg" className="absolute w-full h-screen object-cover z-[-1] border-b-[1px] border-lime-400"/> */}
      {/* <div className="flex flex-col justify-center items-center h-screen w-full text-center">
        <h1 className="text-gray-800 md:text-9xl text-7xl font-extrabold">About Us</h1>
        <p className="opacity-80 text-gray-700 md:text-xl text-lg font-light">Sustainability, Sportsmanship, Service</p>
      </div> */}
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <h1 className="text-black md:text-9xl text-7xl font-extrabold">About Us</h1>
          <p className="opacity-80 text-gray-700 md:text-xl text-lg font-light">Sustainability, Sportsmanship, Service</p>
        </div>
      </BackgroundGradientAnimation>
    </>
  )
}

export default AboutHero
