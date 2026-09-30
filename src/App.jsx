import { Route, Routes } from "react-router-dom"
import Narbar from "./components/Narbar"
import MainContent from "./components/MainContent"
import Teams from "./components/Teams"
import Count from "./components/Count"
import Todos from "./components/Todos"
import LegacyCounter from "./components/LegacyCounter"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Resources from "./pages/Resources"
import Pricing from "./pages/Pricing"
import Careers from "./pages/Careers"
import FetchAPI from "./components/FetchAPI"

const App = () => {
  return (
    <>
      <Narbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainContent />
            <FetchAPI />
            <Teams />
            <Count />
            <Todos />
            <LegacyCounter />
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