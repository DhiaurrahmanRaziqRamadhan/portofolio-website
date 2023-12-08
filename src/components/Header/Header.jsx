import { useEffect, useRef } from "react"
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi"

function Header({ isActive, setActive, darkMode, handleThemeSwitch }) {
  const headerNav = [
    { id: "#home", nama: "Beranda" },
    { id: "#about", nama: "Tentang Saya" },
    { id: "#portfolio", nama: "Portofolio" },
    { id: "#contact", nama: "Hubungi Saya" },
  ]

  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isActive &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setActive(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isActive, setActive])

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              RaziqRamadhan
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              type="button"
              ref={hamburgerRef}
              onClick={() => setActive(!isActive)}
              className={`block absolute right-4 lg:hidden ${
                isActive ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line transition duration-500 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-500 ease-in-out"></span>
              <span className="hamburger-line transition duration-500 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="navMenu"
              className={`absolute py-5 rounded-lg max-w-[250px] w-full right-4 top-full shadow-lg bg-white dark:bg-dark dark:shadow-2xl lg:dark:bg-transparent lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none dark:lg:shadow-none ${
                isActive ? "" : "hidden"
              }`}
              ref={menuRef}
            >
              <ul className="block lg:flex">
                {headerNav?.map((item, i) => (
                  <li className="group" key={i}>
                    <a
                      href={item.id}
                      className="text-based text-dark py-2 mx-8 flex dark:text-white group-hover:text-primary"
                    >
                      {item.nama}
                    </a>
                  </li>
                ))}
                <li className="flex items-center pl-8">
                  <div
                    className="flex items-center"
                    onClick={handleThemeSwitch}
                  >
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    {darkMode ? (
                      <BiSolidToggleRight
                        size={42}
                        className="cursor-pointer text-white"
                      />
                    ) : (
                      <BiSolidToggleLeft size={42} className="cursor-pointer" />
                    )}
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                  </div>
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
