import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutHero from "./components/AboutHero"
import AboutTeam from "./components/AboutTeam"
import VisionStatement from "./components/VisionStatement"
import AboutMap from "./components/AboutMap"
import { BrowserRouter } from "react-router-dom"
import AboutAlumni from "./components/AboutAlumni"

function AboutApp() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <AboutHero />
      <VisionStatement />
      <div id="startchapter" className="my-[30vh]">
        <AboutMap />
      </div>
      <div id="team" className="mt-[30vh]">
        <AboutTeam />
      </div>
      <AboutAlumni/>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AboutApp
