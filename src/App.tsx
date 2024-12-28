import Navbar from "./components/Navbar"
import { Hero } from "./components/Hero"
import RecycledCount from "./components/RecycledCount"
import { About } from "./components/About"
import Footer from "./components/Footer"
import FeaturedPublications from "./components/Publications"
import CallToAction from "./components/CallToAction"
import { BrowserRouter } from "react-router-dom"
import Stores from "./components/Stores"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Hero />
      <div id="partners">
        <RecycledCount />
      </div>
      <Stores></Stores>
      <div id="research">
        <FeaturedPublications />
      </div>
      <About />
      <CallToAction />
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
