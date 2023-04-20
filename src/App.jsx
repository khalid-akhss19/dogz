import Navbar from "./components/Navbar"
import './App.css'
import LandingPage from "./components/LandingPage"
import Service from "./components/Service"
import Catagories from "./components/Catagories"
function App() {

  return (
    <div>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Service></Service>
      <Catagories></Catagories>
    </div>
  )
}

export default App
