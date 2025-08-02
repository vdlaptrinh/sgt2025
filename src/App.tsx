import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Instruction from './components/Instruction';
import Navbar from './components/Navbar';

const galleryImages = [
  {
    original: '/images/gps1.jpg',
    thumbnail: '/images/gps1.jpg',
  },
  {
    original: '/images/gps3.jpg',
    thumbnail: '/images/gps3.jpg',
  },
  {
    original: '/images/gps4.jpg',
    thumbnail: '/images/gps4.jpg',
  },
];
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <div id="gallery"></div>
      <Gallery images={galleryImages} />
      <Instruction />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
