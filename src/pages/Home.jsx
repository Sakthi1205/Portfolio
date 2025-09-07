import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Certifications from "../components/certifications";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
