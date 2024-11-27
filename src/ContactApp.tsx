import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import { BrowserRouter } from "react-router-dom"

function ContactApp() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Contact />
      <Footer />
    </>
  )
}

export default ContactApp
