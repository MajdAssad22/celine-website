import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";
import { projects } from "@/data/projects";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [mobileMenuView, setMobileMenuView] = useState<
    null | "main" | "projects"
  >(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuView != null) {
        setMobileMenuView(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuView]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuView]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuView(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="link"
            onClick={() => scrollToSection("#home")}
            className="hover:no-underline transition-all font-serif text-2xl font-bold text-primary"
          >
            Celine Assad
          </Button>

          {/* Desktop Navigation using shadcn NavigationMenu */}
          <NavigationMenu className="hidden md:flex items-center space-x-8 bg-transparent shadow-none border-none">
            <NavigationMenuList className="flex items-center space-x-8">
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("#home")}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium bg-transparent border-none outline-none"
                >
                  Home
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={() => scrollToSection("#projects")}
                  className="text-foreground text-md hover:text-accent transition-colors duration-300 font-medium bg-transparent border-none outline-none p-0"
                >
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px]">
                  <ul>
                    {projects.map((project) => (
                      <li key={project.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/project/${project.slug}`}
                            className="block px-4 py-2 hover:bg-primary/5 text-foreground"
                          >
                            {project.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium bg-transparent border-none outline-none"
                >
                  About
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium bg-transparent border-none outline-none"
                >
                  Services
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium bg-transparent border-none outline-none"
                >
                  Contact
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuView("main")}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Navigation - Fullscreen Overlay with Projects Dropdown */}

        {mobileMenuView && (
          <div className="h-screen z-60 fixed inset-0 bg-background flex flex-col justify-center md:hidden pl-20">
            <button
              className="absolute top-5 right-6 text-foreground"
              onClick={() => setMobileMenuView(null)}
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>
            {mobileMenuView === "main" && (
              <nav className="flex flex-col space-y-8 text-4xl w-full max-w-xs">
                <button
                  onClick={() => {
                    scrollToSection("#home");
                    setMobileMenuView(null);
                  }}
                  className="w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-bold"
                >
                  Home
                </button>

                <button
                  onClick={() => setMobileMenuView("projects")}
                  className="w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-bold"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    scrollToSection("#about");
                    setMobileMenuView(null);
                  }}
                  className="w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-bold"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection("#services");
                    setMobileMenuView(null);
                  }}
                  className="w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-bold"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection("#contact");
                    setMobileMenuView(null);
                  }}
                  className="w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-bold"
                >
                  Contact
                </button>
              </nav>
            )}

            {mobileMenuView === "projects" && (
              <>
                <button
                  className="w-fit"
                  onClick={() => setMobileMenuView("main")}
                >
                  <ArrowLeft className="-ml-12 h-8 w-8" />
                </button>
                <nav className="flex flex-col space-y-8 text-4xl w-full max-w-xs">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/project/${project.slug ?? project.id}`}
                      className="w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-bold"
                      onClick={() => {
                        setMobileMenuView("main");
                      }}
                    >
                      {project.title}
                    </Link>
                  ))}
                </nav>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
