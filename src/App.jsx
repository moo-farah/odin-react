import Count from "./components/Count"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Narbar from "./components/Narbar"
import { Teams } from "./components/Teams"
import Todos from "./components/Todos"


const App = () => {
  return (
    <>
    <Narbar />
    <MainContent />
    <Teams />
    <Count />
    <Todos />
    <Footer />
   </>
    
  )
}

export default App
