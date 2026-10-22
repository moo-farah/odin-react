import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Resources from "./pages/Resources"
import Pricing from "./pages/Pricing"
import Careers from "./pages/Careers"
import OpenRoles from "./pages/OpenRoles"

const App = () => {
  return (
    <>
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/roles" element={<OpenRoles />} />
      </Routes>
      <Footer />
    </>
    </>
  )
}

export default App