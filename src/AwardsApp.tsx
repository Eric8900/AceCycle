import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AwardsPage from './components/AwardsPage'
import Footer from './components/Footer'

function AwardsApp() {
  return (
    <BrowserRouter>
      <Navbar variant="solid" />
      <AwardsPage />
      <Footer />
    </BrowserRouter>
  )
}

export default AwardsApp
