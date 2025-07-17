import { GrFormNextLink } from "react-icons/gr";

export function CardProjetos({ img, titulo, descricao, tecnologias }) {
  return (
    <div className="w-full h-fit flex flex-col shadow-primary hover:shadow-2xl transition-all rounded-2xl">
      <img className="w-full rounded-t-2xl" src={img} alt={titulo} />
      <div className="bg-white p-5 rounded-2xl">
        <h2 className="text-2xl font-bold">{titulo}</h2>
        <p className="text-lg my-3 text-zinc-500">{descricao}</p>
        <ul className="flex gap-3">
          {tecnologias.map((tecnologia) => (
            <li className="px-3 py-1 bg-linear-to-r from-blue-200 to-red-50 rounded-md text-blue-500 font-medium w-fit h-fit">
              {tecnologia}
            </li>
          ))}
        </ul>
        <p className="text-lg text-blue-500 flex items-center justify-end my-5">
          Ver Projetos <GrFormNextLink />
        </p>
      </div>
    </div>
  );
}
