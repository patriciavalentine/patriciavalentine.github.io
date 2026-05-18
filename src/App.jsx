import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import DashboardPreview from "./components/DashboardPreview";
import Projects from "./components/Projects";
import ResumeGate from "./components/ResumeGate";
import Recommendations from "./components/Recommendations";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DashboardPreview />
        <ResumeGate />
        <Recommendations /> 
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
