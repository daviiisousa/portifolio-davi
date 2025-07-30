import { GrFormNextLink } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

export function CardProjetos({ img, titulo, descricao, tecnologias, linkProjeto, linkProjetoGithub }) {
  return (
    <div className="w-full h-[80%] flex flex-col shadow-primary hover:shadow-2xl transition-all rounded-2xl">
      <div className="w-full h-1/2">
        <img className="w-full h-full rounded-t-2xl object-cover" src={img} alt={titulo} />
      </div>
      <div className="bg-white p-10 rounded-2xl h-full border flex flex-col ">
          <h2 className="text-3xl font-bold mb-3">{titulo}</h2>
          <p className="text-lg text-zinc-500 mb-3">{descricao}</p>
        
          <ul className="flex gap-3 flex-wrap my-3">
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
  );
}
