import { useState } from "react";
import { Container } from "../Container";
import logo from "../../../assets/logo_dark.png";
import {
  Calendar1Icon,
  ImageIcon,
  HomeIcon,
  MenuIcon,
  ScissorsIcon,
  XIcon,
  UserIcon,
  PhoneIcon,
} from "lucide-react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <Container>
      <header className="flex items-center justify-between py-4 md:py-4 lg:py-6">
        <h1>
          <a href="#">
            <img src={logo} alt="Logo Flavio Cortes" className="w-28 md:w-40" />
          </a>
        </h1>
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#services">Serviços</a>
          </li>

          <li>
            <a href="#gallery">Galeria</a>
          </li>

          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <button
            className="
            flex 
            items-center 
            gap-2 
            bg-brand 
            text-white 
            py-2 
            px-4
            rounded-md
            text-xs
            "
          >
            <Calendar1Icon className="w-4 h-4 lg:w-6 lg:h-6 lg:text-lg" />
            AGENDAR HORÁRIO
          </button>

          {/* Menu Mobile */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {openMenu ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Drawer Mobile */}
        <div
          className="
            fixed
            inset-0
            z-50
            lg:hidden
            pointer-events-none
          "
        >
          {/* Overlay */}
          <div
            onClick={closeMenu}
            className={`
              absolute
              inset-0
              top-16.20
              md:top-18
              lg:top-[17.5]
              bg-black/70
              transition-opacity
              duration-300

              ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0"}

            `}
          />

          {/* Menu */}

          <aside
            className={`
              absolute
              right-0
              top-16.20
              md:top-18 
              lg:top-17.5
              h-full
              w-80
              bg-[#1F1F1F]
              p-6

              transition-transform
              duration-300

              ${
                openMenu
                  ? "translate-x-0 pointer-events-auto"
                  : "translate-x-full"
              }

            `}
          >
            <button onClick={closeMenu} className="mb-10">
              <XIcon />
            </button>

            <nav>
              <ul className="flex flex-col text-white text-lg">
                <li className="border-b border-gray-700 py-4">
                  <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex items-center gap-4"
                  >
                    <HomeIcon className="text-brand" />
                    Home
                  </a>
                </li>

                <li className="border-b border-gray-700 py-4">
                  <a
                    href="#services"
                    onClick={closeMenu}
                    className="flex items-center gap-4"
                  >
                    <ScissorsIcon />
                    Serviços
                  </a>
                </li>

                <li className="border-b border-gray-700 py-4">
                  <a
                    href="#gallery"
                    onClick={closeMenu}
                    className="flex items-center gap-4"
                  >
                    <ImageIcon />
                    Galeria
                  </a>
                </li>

                <li className="border-b border-gray-700 py-4">
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="flex items-center gap-4"
                  >
                    <UserIcon />
                    Sobre
                  </a>
                </li>

                <li className="border-b border-gray-700 py-4">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex items-center gap-4"
                  >
                    <PhoneIcon />
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className="
              mt-4
              w-full
              flex
              justify-center
              items-center
              gap-2
              bg-brand
              text-white
              py-3
              rounded-md
              text-xs
              "
            >
              <Calendar1Icon />
              AGENDAR HORÁRIO
            </button>
          </aside>
        </div>
      </header>
    </Container>
  );
}
