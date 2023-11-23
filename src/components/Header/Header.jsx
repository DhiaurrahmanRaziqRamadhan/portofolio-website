function Header({ isActive, toggle }) {

  return (
  <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition duration-500 ease-in-out">
    <div className="container">
      <div className="flex items-center justify-between relative">
        <div className="px-4">
          <a href="#home" className="font-bold text-lg text-primary block py-6">RaziqRamadhan</a>
        </div>
        <div className="flex items-center px-4">
          <button id="hamburger" type="button" onClick={toggle} className={`block absolute right-4 lg:hidden ${isActive ? null : "hamburger-active"}`}>
            <span className="hamburger-line transition duration-500 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-500 ease-in-out"></span>
            <span className="hamburger-line transition duration-500 ease-in-out origin-bottom-left"></span>
          </button>
          <nav id="navMenu" className={`absolute py-5 rounded-lg max-w-[250px] w-full right-4 top-full shadow-lg bg-white lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none ${isActive ? "hidden" : "null"}`}>
            <ul className="block lg:flex">
              <li className="group">
                <a href="#home" className="text-based text-dark py-2 mx-8 flex  group-hover:text-primary">Beranda</a>
              </li>
              <li className="group">
                <a href="#about" className="text-based text-dark py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
              </li>
              <li className="group">
                <a href="#portfolio" className="text-based text-dark py-2 mx-8 flex group-hover:text-primary">Portofolio</a>
              </li>
              <li className="group">
                <a href="#contact" className="text-based text-dark py-2 mx-8 flex group-hover:text-primary">Hubungi Saya</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header