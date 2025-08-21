import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Instruction from "./components/Instruction";
import Navbar from "./components/Navbar";

const galleryImages = [
  {
    original: "/images/sgt2025-11.jpg",
    thumbnail: "/images/sgt2025-11.jpg",
  },
  {
    original: "/images/sgt2025-12.jpg",
    thumbnail: "/images/sgt2025-12.jpg",
  },
  {
    original: "/images/sgt2025-14.jpg",
    thumbnail: "/images/sgt2025-14.jpg",
  },
  {
    original: "/images/sgt2025-15.jpg",
    thumbnail: "/images/sgt2025-15.jpg",
  },
  {
    original: "/images/sgt2025-17.jpg",
    thumbnail: "/images/sgt2025-17.jpg",
  },
  {
    original: "/images/sgt2025-18.jpg",
    thumbnail: "/images/sgt2025-18.jpg",
  },
  {
    original: "/images/sgt2025-19.jpg",
    thumbnail: "/images/sgt2025-19.jpg",
  },
  {
    original: "/images/specification.png",
    thumbnail: "/images/specification.png",
  },
  {
    original: "/images/sgt2025-5.jpg",
    thumbnail: "/images/sgt2025-5.jpg",
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
