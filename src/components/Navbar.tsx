import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

function Navbar() {
  function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#579124"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }

  return (
    <div className="w-full flex lg:items-center lg:justify-center">
    {/* MOBILE */}
      <header className="lg:hidden flex fixed z-20 items-center h-20 w-full bg-white shrink-0 px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden border-0 shadow-none" size="icon" variant="outline">
              <MenuIcon className="h-12 w-12" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <a href="/">
              <img className='h-16 w-18' src='AceCycleLogo.png'/>
              <span className="sr-only">AceCycle</span>
            </a>
            <div className="grid gap-2 py-6">
              <a className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                Home
              </a>
              <a className="flex w-full items-center py-2 text-lg font-semibold" href="/about">
                About
              </a>
              <a className="flex w-full items-center py-2 text-lg font-semibold" href="/contact">
                Contact
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      {/* LARGE SCREENS */}
      <header className="hidden lg:flex fixed z-20 items-center justify-center mt-24 h-20 w-fit rounded-2xl border-[#579124] border-[0.5px] bg-white shrink-0 px-4 md:px-6">
        <a className="mr-6 " href="/">
          <img className='h-16 w-18' src='AceCycleLogo.png'/>
          <span className="sr-only">AceCycle</span>
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <a
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="/"
              >
                Home
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="/about"
              >
                About
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="/contact"
              >
                Contact
              </a>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  )
}

export default Navbar