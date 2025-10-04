import { Award, Users, Home, Heart } from "lucide-react";

import designerPortrait from "@/assets/celine-portrait.jpeg";

const About = () => {
  const stats = [
    { icon: Home, number: "200+", label: "Projects Completed" },
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Award, number: "12", label: "Design Awards" },
    { icon: Heart, number: "15", label: "Years Experience" },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                  About Celine
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Driven by a passion for interior design, Celine is dedicated
                    to creating spaces that balance functionality with emotional
                    depth. With a thoughtful approach that blends modern
                    aesthetics with cultural and historical influences, Celine
                    designs spaces that tell meaningful stories and resonate
                    with the people who experience them.
                  </p>
                  <p>
                    Continuously striving for growth, Celine is committed to
                    learning, exploring, and expanding her creative horizons in
                    order to deliver inspiring and relatable designs.
                  </p>
                </div>
              </div>

              {/* <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                Design Specialties
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Luxury Residential",
                  "Space Planning",
                  "Color Consultation",
                  "Custom Furniture",
                  "Lighting Design",
                  "Art Curation",
                ].map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">{specialty}</span>
                  </div>
                ))}
              </div>
            </div> */}
            </div>

            <div className="relative w-fit mx-auto">
              <img
                src={designerPortrait}
                alt="Celine Assad - Interior Designer"
                className="mx-auto w-[400px] h-[450px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark-red text-primary-foreground mx-2 px-6 py-4 rounded-xl">
                <p className="font-serif text-lg font-semibold">
                  Award Winning Designer
                </p>
                <p className="text-sm opacity-90">2+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
