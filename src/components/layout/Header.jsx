import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { gradient } from "../../utils/style";
import { motion } from "framer-motion";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

export function Header() {
  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


  function handleMenuToggle() {
    setModal(!modal);
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  return (
    <header className="flex items-center p-3 justify-between w-full fixed border-b border-gray-300 z-10 bg-white/70 backdrop-blur-md dark:bg-gray-900/70 dark:border-gray-700">
      <h1 className={`font-bold text-[22px] ${gradient.textGradientPrimary}`}>
        Portifolio
      </h1>
      <nav>
        <ul className="flex gap-5 font-medium max-md:hidden dark:text-white items-center">
          <div className="flex gap-3 items-center">
            <IoSunnyOutline size={20} className="text-yellow-500 cursor-pointer" onClick={() => setTheme('light')} />
            <IoMoonOutline size={20} className="text-gray-500 cursor-pointer" onClick={() => setTheme('dark')} />
          </div>
          <li className="hover:text-blue-500">
            <a href="#inicio">Início</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#habilidades">Habilidades</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
      <IoMdMenu
        onClick={handleMenuToggle}
        size={30}
        className="text-gray-500 cursor-pointer md:hidden"
      />
      {modal && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-5 dark:bg-gray-800"
        >
          <ul className="flex flex-col gap-2 dark:text-white">
            <div className="flex gap-3 items-center">
              <IoSunnyOutline size={20} className="text-yellow-500 cursor-pointer" onClick={() => setTheme('light')} />
              <IoMoonOutline size={20} className="text-gray-500 cursor-pointer" onClick={() => setTheme('dark')} />
            </div>
            <li className="hover:text-blue-500">
              <a href="#inicio">Início</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#habilidades">Habilidades</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
