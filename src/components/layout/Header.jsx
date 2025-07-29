export function Header() {
  return (
    <header className="flex items-center p-3 justify-between w-full  fixed border-b border-gray-300 z-10 bg-white/70 backdrop-blur-md">
      <h1 className="font-bold text-[22px]">Portifolio</h1>
      <nav className="">
        <ul className="flex gap-5 font-medium">
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Habilidades</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Experiência</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
