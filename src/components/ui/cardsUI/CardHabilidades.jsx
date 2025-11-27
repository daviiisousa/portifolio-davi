export function CardHabilidades({ icon, titulo, habilidades }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md w-full h-fit p-5 hover:scale-105 transition-all shadow-primary dark:shadow-gray-700 hover:shadow-2xl max-sm:p-2">
      <div className="flex items-center max-sm:flex-col gap-5 mb-5 max-sm:gap-2">
        <div className="bg-zinc-100 dark:bg-gray-700 p-3 rounded-md">{icon}</div>
        <h1 className="text-2xl max-sm:text-lg font-bold dark:text-white">{titulo}</h1>
      </div>
      <ul>
        {habilidades.map((itens) => (
          <li
            key={itens}
            className="bg-zinc-100 dark:bg-gray-700 dark:text-gray-200 p-3 rounded-md mb-3 font-medium hover:bg-zinc-300 dark:hover:bg-gray-600 transition-all"
          >
            {itens}
          </li>
        ))}
      </ul>
    </div>
  );
}
