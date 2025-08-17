import { GrFormNextLink } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { gradient } from "../../../utils/style";

export function CardProjetos({
  img,
  titulo,
  descricao,
  tecnologias,
  linkProjeto,
  linkProjetoGithub,
}) {
  return (
    <div className="w-full h-full flex flex-col shadow-primary hover:shadow-2xl transition-all rounded-2xl">
      <div className="w-full h-[50%]">
        <img
          className="w-full h-full rounded-t-2xl object-cover"
          src={img}
          alt={titulo}
        />
      </div>
      <div className="bg-white p-5 rounded-2xl h-[50%] flex flex-col">
        <h2 className="text-3xl font-bold mb-2">{titulo}</h2>
        <p className="text-lg text-zinc-500 h-[60%] overflow-y-auto mb-2 scrollbar-thin  scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full">
          {descricao}
        </p>
        <ul className="flex flex-wrap gap-3">
          {tecnologias.map((tecnologia) => (
            <li
              key={tecnologia}
              className={`px-3 py-1 ${gradient.bgGradientSecondary} rounded-md text-blue-500 font-medium h-fit`}
            >
              {tecnologia}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between w-full h-full">
          <a href={linkProjetoGithub} target="_blank">
            <FaGithub size={35} className="text-gray-500 cursor-pointer" />
          </a>
          <a
            href={linkProjeto}
            target="_blank"
            className="text-lg text-blue-500 flex items-center my-5 cursor-pointer hover:text-blue-700 transition-all"
          >
            Ver Projetos <GrFormNextLink />
          </a>
        </div>
      </div>
    </div>
  );
}
