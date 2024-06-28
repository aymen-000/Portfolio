import Aboutme from "./componenets/Aboutme"
import Contact from "./componenets/Contact"
import Header from "./componenets/Header"
import Home from "./componenets/Home"
import Projects from "./componenets/Projects"
import WhatIdo from "./componenets/WhatIdo"
import Footer from "./componenets/Footer"
import { Flowbite } from "flowbite-react"
import { UserContextProvider } from "./componenets/UserContext"
import Particle from "./componenets/Particle"
function App() {
  return (
    <Flowbite>
    <UserContextProvider >
      <div className="bg-gray-800 h-full  dark:bg-[#1A1A1A] ">

        <Header />
        <Particle/>
        <Home />
        <Aboutme />
        <WhatIdo />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </UserContextProvider>
  </Flowbite>
  )
}

export default App
