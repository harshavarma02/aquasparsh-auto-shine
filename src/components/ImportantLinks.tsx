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
                      <a href="#menu" className="block px-4 py-2 text-white hover:text-primary transition-colors rounded-md">
                        Menu
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

        <div id="menu" className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/56470c74-2be8-4529-8603-365b64e3771d.png" 
                alt="Service Menu" 
                className="w-full object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;