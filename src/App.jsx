import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Hero from "./Components/hero/Hero";
import Test from "./Test";

import "./app.scss"
const App = () => {
  return <div>

    <Cursor />

    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section><Services /></section>
    <section id="Portfolio"> <Parallax type="Portfolio" /></section>
    <Portfolio />

    <section id="Contact">
      <Contact />
      </section> 
    
  

  </div>;
};

export default App;
