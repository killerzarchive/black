import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Companies from './components/Companies';
import Solutions from './components/Solutions';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Companies />
      <Solutions />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
