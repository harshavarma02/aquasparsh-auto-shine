import { Card, CardContent } from "./ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const ImportantLinks = () => {
  return (
    <section id="links" className="py-16 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-semibold hover:text-primary">
                  Important Links
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="min-w-[200px] bg-secondary p-2 rounded-md">
                    <NavigationMenuLink asChild>
                      <a href="#brochures" className="block px-4 py-2 text-white hover:text-primary transition-colors rounded-md">
                        Brochures
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#faq" className="block px-4 py-2 text-white hover:text-primary transition-colors rounded-md">
                        FAQ
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#testimonials" className="block px-4 py-2 text-white hover:text-primary transition-colors rounded-md">
                        Testimonials
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#blog" className="block px-4 py-2 text-white hover:text-primary transition-colors rounded-md">
                        Blog
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#recent-works" className="block px-4 py-2 text-white hover:text-primary transition-colors rounded-md">
                        Recent Works
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div id="brochures" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/e894d00e-0e73-43aa-9060-67f93ce687f7.png" 
                alt="Service Brochure" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Service Price List</h3>
                <p className="text-gray-600">View our comprehensive service pricing and packages</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/e894d00e-0e73-43aa-9060-67f93ce687f7.png" 
                alt="PPF Protection Brochure" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">PPF Protection Details</h3>
                <p className="text-gray-600">Learn about our Paint Protection Film services</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/e894d00e-0e73-43aa-9060-67f93ce687f7.png" 
                alt="Car Detailing Brochure" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Car Detailing Services</h3>
                <p className="text-gray-600">Explore our premium car detailing options</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;