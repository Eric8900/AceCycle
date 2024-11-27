import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutHero from "./components/AboutHero"
import AboutTeam from "./components/AboutTeam"
import VisionStatement from "./components/VisionStatement"
import AboutMap from "./components/AboutMap"

function AboutApp() {

  return (
    <>
      <Navbar />
      <AboutHero />
      <VisionStatement />
      <div id="startchapter" className="my-[30vh]">
        <AboutMap />
      </div>
      <div id="team" className="mt-[30vh]">
        <AboutTeam />
      </div>
      <Footer />
    </>
  )
}

export default AboutApp
