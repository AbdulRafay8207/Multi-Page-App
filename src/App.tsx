import { Routes, Route } from 'react-router';
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer/FooterSection";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FooterSection />
    </>
  );
}

export default App;
