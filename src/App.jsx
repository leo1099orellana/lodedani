import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Strip from './components/Strip.jsx';
import About from './components/About.jsx';
import Numbers from './components/Numbers.jsx';
import Popular from './components/Popular.jsx';
import Combos from './components/Combos.jsx';
import Menu from './components/Menu.jsx';
import Reviews from './components/Reviews.jsx';
import HowToOrder from './components/HowToOrder.jsx';
import Faq from './components/Faq.jsx';
import CtaBand from './components/CtaBand.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import { initTracking } from './lib/track.js';

export default function App() {
  useEffect(() => {
    initTracking();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Strip />
        <About />
        <Numbers />
        <Popular />
        <Combos />
        <Menu />
        <Reviews />
        <HowToOrder />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
