export function Header() {
  return (
    <header className="flex items-center p-3 justify-between w-full  fixed border-b border-gray-300 z-10 bg-white/70 backdrop-blur-md">
      <h1 className="font-bold text-[22px]">Portifolio</h1>
      <nav className="">
        <ul className="flex gap-5 font-medium">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
