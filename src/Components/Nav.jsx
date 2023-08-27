import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className='w-full flex flex-row justify-between items-center max-container'>
        <a href="/">
          <img
            src={headerLogo}
            alt="headerLogo"
            width={130}
            height={90}
          />
        </a>
        <ul className="hidden lg:flex flex-1 max-container justify-end items-center gap-16">
          {navLinks.map(navlink => (
            <li
              key={navlink.label}
            >
              <a
                href={navlink.href}
                className="font-monts errat leading-normal text-lg text-slate-gray  hover:text-black hover:font-semibold"
              >
                {navlink.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="block lg:hidden relative"
        >
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setToggle(prev => !prev)}
          />
          <ul className={`${toggle? "flex" : "hidden"} menu-toggle justify-center`}>
            {navLinks.map(navlink => (
              <li
                key={navlink.label}
                className="flex-1 flex"
              >
                <a
                  href={navlink.href}
                  className="font-montserrat leading-normal text-md text-slate-gray hover:text-black hover:font-semibold"
                  onClick={() => setToggle(prev => !prev)}
                >
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>

  )
}

export default Nav