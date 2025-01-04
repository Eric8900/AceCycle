import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { useEffect, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/#partners", text: "Partners" },
    { href: "/#research", text: "Research" },
    { href: "/#gallery", text: "Gallery" },
    { href: "/#about", text: "Mission" },
    { href: "/about/", text: "About" },
    { href: "/about/#team", text: "Our Team" },
    { href: "/#acecycleapp", text: "AceCycle App" },
    { href: "/contact/", text: "Contact Us" }
  ];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#') && window.location.pathname === href.split('#')[0]) {
      e.preventDefault()
      const element = document.querySelector(`#${href.split('#')[1]}`)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative">
      <div className="container mx-auto px-6 py-12">
        <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex justify-center md:justify-start">
              <a href="/" className="block">
                <img src="/AceCycleLogo.png" alt="AceCycle" className="h-32 w-36" />
              </a>
            </div>

            <div className="flex gap-8 justify-between items-start md:grid md:grid-cols-2 text-left sm:mx-[20%] mx-[10%] md:mx-0">
              <NavigationMenu className="flex justify-start">
                <NavigationMenuList className="flex flex-col gap-3 items-start">
                  {links.slice(0, 5).map((link) => (
                    <NavigationMenuLink asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-gray-600 hover:text-lime-600 transition-colors !m-0">
                        {link.text}
                      </a>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu className="flex justify-start">
                <NavigationMenuList className="flex flex-col gap-3 items-start">
                  {links.slice(5).map((link) => (
                    <NavigationMenuLink asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-gray-600 hover:text-lime-600 transition-colors !m-0">
                        {link.text}
                      </a>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Ready to make an impact?</h3>
                <a
                  href="/about/#startchapter"
                  onClick={(e) => handleLinkClick(e, "/about/#startchapter")}
                  className="inline-flex items-center justify-center px-6 py-3 w-full text-lg font-bold bg-gradient-to-r from-lime-400 to-lime-600 text-white rounded-lg hover:from-lime-700 hover:to-lime-800 transition-colors"
                >
                  Start a Chapter
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-600">Made with ❤️️ by Eric</p>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} AceCycle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;