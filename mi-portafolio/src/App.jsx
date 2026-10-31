import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesBento from "./components/ServicesBento";
import Projects from "./components/Projects";
import Milestones from "./components/Milestones";
import TestimonialsAndFAQ from "./components/TestimonialsAndFAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-bg font-sans text-fg antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ServicesBento />
        <Milestones />
        <TestimonialsAndFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App
