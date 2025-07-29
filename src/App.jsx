import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  

  return (
    <>
      <div>
   <Navbar />
    <Hero />
    <Cocktails />
    <About />
    <Art />
    <Menu />
    <Contact />
   
      </div>
     
    </>
  ) 
}

export default App
