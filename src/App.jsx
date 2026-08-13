import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesBento from "./components/ServicesBento";
import Projects from "./components/Projects";
import Milestones from "./components/Milestones";
import TestimonialsAndFAQ from "./components/TestimonialsAndFAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#0B0E1A] text-[#F5F6FA] font-sans antialiased">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <ServicesBento />
      <Projects />
      <Milestones />
      {/* <TestimonialsAndFAQ /> */}
      <ContactCTA />
      <Footer />
    </div>
  );
}
