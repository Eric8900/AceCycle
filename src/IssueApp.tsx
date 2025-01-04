import Hero from "./components/issue-page/Hero"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Info from "./components/issue-page/Info"
import CallToAction from "./components/issue-page/CallToAction"

function IssueApp() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <Hero />
            <Info/>
            <CallToAction/>
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default IssueApp