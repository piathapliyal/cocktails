import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  

  return (
    <>
      <div>
   <Navbar />
    <Hero />
   
      </div>
     
    </>
  ) 
}

export default App
