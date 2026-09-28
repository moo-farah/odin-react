import Clock from "./components/Clock"
import Count from "./components/Count"
import Footer from "./components/Footer"
import LegacyCounter from "./components/LegacyCounter"
import MainContent from "./components/MainContent"
import Narbar from "./components/Narbar"
import { Teams } from "./components/Teams"
import Todos from "./components/Todos"


const App = () => {
  return (
    <>
    <h1>Our First Test</h1>;
    <Narbar />
    <MainContent />
    <Teams />
    <Count />
    <Todos />
    <Clock />
    <LegacyCounter />
    <Footer />
   </>
    
  )
}

export default App
