import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Resources from "./pages/Resources"
import Pricing from "./pages/Pricing"
import Careers from "./pages/Careers"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainContent />
            <Footer />
          </>
        } />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  )
}

export default App