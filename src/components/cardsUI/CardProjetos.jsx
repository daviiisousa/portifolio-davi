import { GrFormNextLink } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

export function CardProjetos({ img, titulo, descricao, tecnologias, linkProjeto, linkProjetoGithub }) {
  return (
    <div className="w-full h-full flex flex-col shadow-primary hover:shadow-2xl transition-all rounded-2xl">
      <img className="w-full rounded-t-2xl" src={img} alt={titulo} />
      <div className="bg-white p-5 rounded-2xl h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">{titulo}</h2>
          <p className="text-lg my-3 text-zinc-500">{descricao}</p>
        </div>
        <div className="self-end ">
          <ul className="flex gap-3 flex-wrap">
            {tecnologias.map((tecnologia) => (
              <li className="px-3 py-1 bg-linear-to-r from-blue-200 to-red-50 rounded-md text-blue-500 font-medium  h-fit">
                {tecnologia}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between w-full">
            <a href={linkProjetoGithub} target="_blank">
              <FaGithub size={35} className="text-gray-500 cursor-pointer" />
            </a>
            <a href={linkProjeto} target="_blank" className="text-lg text-blue-500 flex items-center justify-end my-5 cursor-pointer hover:text-blue-700 transition-all">
              Ver Projetos <GrFormNextLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
