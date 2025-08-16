export function CardHabilidades({ icon, titulo, habilidades }) {
  return (
    <div className="bg-white rounded-md w-full h-fit p-5 hover:scale-105 transition-all shadow-primary hover:shadow-2xl">
      <div className="flex items-center  gap-5 mb-5">
        <div className="bg-zinc-100 p-3 rounded-md">{icon}</div>
        <h1 className="text-2xl font-bold">{titulo}</h1>
      </div>
      <ul>
        {habilidades.map((itens) => (
          <li
            key={itens}
            className="bg-zinc-100 p-3 rounded-md mb-3 font-medium hover:bg-zinc-300 transition-all"
          >
            {itens}
          </li>
        ))}
      </ul>
    </div>
  );
}
