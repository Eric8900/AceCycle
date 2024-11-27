import { useState, useEffect, MouseEvent } from "react"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { useLocation } from 'react-router-dom';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const mobileHeaderHeight = useWindowSize().height;

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const isMobile = window.innerWidth < 1024; // lg breakpoint
          const offset = isMobile ? -mobileHeaderHeight : 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition + offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    if (href.includes('#') && window.location.pathname === href.split('#')[0]) {
      e.preventDefault()
      const element = document.querySelector(`#${href.split('#')[1]}`)
      if (element) {
        const isMobile = window.innerWidth < 1024;
        const offset = isMobile ? -mobileHeaderHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition + offset,
          behavior: 'smooth'
        });
      }
    }
  }

  return (
    // Rest of the component remains unchanged
    <div className="w-full flex lg:items-center lg:justify-center">
      {/* MOBILE */}
      <header className={`lg:hidden w-full ${isOpen ? "bg-white" : "bg-transparent"} py-4 px-8 z-[100]`}>
        <div className="flex items-center justify-between h-20 pr-4">
          <a href="/">
            <img className="h-16 w-18" src="/AceCycleLogo.png" alt="AceCycle" />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="relative w-8 h-8">
            <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-black transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-black transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>

        <nav className={`w-full bg-white transform transition-all duration-300 ease-in-out ${isOpen ? "h-screen opacity-100 visible" : "h-0 opacity-0 invisible"}`}>
          <div className="flex flex-col items-center gap-3 text-3xl font-light py-8">
            {[
              { href: "/", text: "Home" },
              { href: "/#partners", text: "Partners" },
              { href: "/#research", text: "Research" },
              { href: "/#gallery", text: "Gallery" },
              { href: "/#about", text: "Mission" },
              { href: "/about/", text: "About" },
              { href: "/about/#team", text: "Our Team" },
              { href: "/#acecycleapp", text: "AceCycle App" },
              { href: "/contact/", text: "Contact Us" },
              { href: "/about/#startchapter", text: "Start a Chapter" }
            ].map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="transform transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: `translateY(${isOpen ? 0 : '20px'})`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      </header>
      {/* LARGE SCREENS */}
      <header className="hidden absolute mt-[15%] lg:flex m-6 justify-between w-full rounded-2xl backdrop-blur-sm px-4 md:px-16 z-[100]">
        <a className="mr-6" href="/">
          <img className='h-32 w-36' src='/AceCycleLogo.png' />
          <span className="sr-only">AceCycle</span>
        </a>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {[
              { href: "/", text: "Home" },
              { href: "/#partners", text: "Partners" },
              { href: "/#research", text: "Research" },
              { href: "/#gallery", text: "Gallery" },
              { href: "/#about", text: "Mission" },
              { href: "/about/", text: "About" },
              { href: "/about/#team", text: "Our Team" },
              { href: "/#acecycleapp", text: "AceCycle App" },
              { href: "/contact/", text: "Contact Us" },
            ].map((link) => (
              <NavigationMenuLink asChild>
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group inline-flex h-9 w-max items-center justify-center bg-transparent py-2 text-lg font-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.text}
                </a>
              </NavigationMenuLink>
            ))}
            <NavigationMenuLink asChild>
              <a
                href="/about/#startchapter"
                key="/about/#startchapter"
                onClick={(e) => handleLinkClick(e, "/about/#startchapter")}
                className="group inline-flex h-9 w-max items-center justify-center bg-transparent py-2 text-lg font-bold bg-gradient-to-r from-lime-600 to-lime-700 bg-clip-text text-transparent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Start a Chapter
              </a>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  )
}

export default Navbar