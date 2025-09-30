const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-serif text-xl font-semibold mb-2">
              Celine Assad
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Interior Designer • San Francisco, CA
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Celine Assad Design. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Crafted with passion for beautiful spaces
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
