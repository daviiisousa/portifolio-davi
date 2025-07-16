import { GrFormNextLink } from "react-icons/gr";

export function CardProjetos({img, titulo, descricao, tecnologias}){
    return(
        <div className="w-full h-full flex flex-col shadow-2xl rounded-2xl">
            <img className="w-full " src={img} alt={titulo} />
            <div className="bg-white p-5 rounded-2xl">
                <h2 className="text-2xl font-bold">{titulo}</h2>
                <p className="text-lg text-zinc-500">{descricao}</p>
                <p className="p-3 bg-linear-to-r from-blue-200 to-red-50 rounded-md text-blue-500 w-fit ">{tecnologias}</p>
                <p className="text-lg text-blue-500 flex items-center ">Ver Projetos <GrFormNextLink /></p>
            </div>
        </div>
    )
}