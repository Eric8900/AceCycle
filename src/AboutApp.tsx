import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutHero from "./components/AboutHero"
import AboutTeam from "./components/AboutTeam"
import VisionStatement from "./components/VisionStatement"
import AboutMap from "./components/AboutMap"

function AboutApp() {

  return (
    <>
      <Navbar/>
      <AboutHero/>
      <VisionStatement/>
      <AboutMap/>
      <AboutTeam/>
      <Footer/>
    </>
  )
}

export default AboutApp
