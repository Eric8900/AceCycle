import Navbar from "./components/Navbar"
import { Hero } from "./components/Hero"
import RecycledCount from "./components/RecycledCount"
import { About } from "./components/About"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <RecycledCount/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
