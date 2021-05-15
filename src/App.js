import AOS from "aos";
import { useEffect } from "react";
import Features from "./components/Features.js";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import NavBar from "./components/NavBar.js";
import Screenshots from "./components/Screenshots.js";
import WayOfUse from "./components/WayOfUse.js";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <WayOfUse />
      <Screenshots />
      <Footer />
    </>
  );
}

export default App;
