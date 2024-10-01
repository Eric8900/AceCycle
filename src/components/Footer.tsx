function Footer() {
    return (
      <>
        <footer className="py-6 border-[1px] border-t-lime-400">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <a href="/">
                  <img
                    src="/AceCycleLogo.png"
                    alt="Logo"
                    className="h-16 w-18"
                  />
                </a>
              </div>
              <div className="md:flex hidden text-sm">© Copyright AceCycle 2024.&nbsp;&nbsp;All Rights Reserved.</div>
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="text-gray-900 transition-all hover:text-gray-500"
                >
                  Home
                </a>
                <a
                  href="/about/"
                  className="text-gray-900 transition-all hover:text-gray-500"
                >
                  About
                </a>
                <a
                  href="/contact/"
                  className="text-gray-900 transition-all hover:text-gray-500"
                >
                  Contact
                </a>
              </div>
              <div className="md:hidden flex text-sm mt-10">© Copyright AceCycle 2024.&nbsp;&nbsp;All Rights Reserved.</div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;