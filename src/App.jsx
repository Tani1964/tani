import { BrowserRouter } from "react-router-dom"
import { About, Contact,Feedbacks, Hero,Navbar, Tech, Works, StarsCanvas, Experience} from './components'
import {waves, backdrop} from './assets'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {/* <div className="border-2 z-10 absolute w-full -mt-[200px]">

        <img className=" w-full border-2  h-1/2 -mt-[200px]" src={waves} alt="" />
        </div> */}
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App