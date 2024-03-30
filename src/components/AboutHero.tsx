function AboutHero() {

  return (
    <>
      <img src="/blurry-gradient-haikei.svg" className="absolute w-full h-screen object-cover z-[-1] border-b-[1px] border-lime-400"/>
      <div className="flex flex-col justify-center items-center h-screen w-full text-center">
        <h1 className="text-gray-800 md:text-9xl text-7xl font-extrabold">About Us</h1>
        <p className="opacity-80 text-gray-700 md:text-xl text-lg">Sustainability, Sportsmanship, Service</p>
      </div>
    </>
  )
}

export default AboutHero
