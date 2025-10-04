import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectsGallery />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
