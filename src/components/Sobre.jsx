import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoCode } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";

export function Sobre() {
  return (
    <section className="p-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold ">Sobre Mim</h1>
        <p className="text-2xl mt-5 mb-7 w-[800px] text-gray-500 ">
          Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
          busca de novos desafios e oportunidades para crescer.
        </p>
      </div>
      <div className="flex w-full h-full gap-10">
        <div className="w-2/5">
          <img
            className="w-auto rounded-2xl h-[400px] shadow-2xl"
            src="./imgSobre.jpg"
            alt="Computador com codigos"
          />
        </div>
        <div className="w-3/5">
          <p className="text-2xl text-gray-500">
            Com mais de 1 ano de experiência em desenvolvimento web, tenho
            paixão por criar soluções digitais que combinam funcionalidades
            expecional com design elegante. Minha jornada começou com
            curiosidade sobre como as coisas funcionam na web, e hoje trabalho
            com as tecnologias mais modernas do mercado.
          </p>
          <p className="text-2xl my-5 text-gray-500">
            Especializo-me em desenvolvimento FullStack, com foco particular em
            React, Node.js e banco de dados modernos. Acredito que a melhor
            tecnologia é aquela que resolve problemas reais de forma simples e
            eficiente
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex gap-3 items-center">
              <IoCode
                size={50}
                className="text-blue-500 rounded-md bg-blue-200 p-3"
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-zinc-900 text-[18px]">
                  Clean Code
                </h3>
                <p className="text-zinc-500">Código limpo e manutenível</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <RiTeamLine
                size={50}
                className="text-green-500 rounded-md bg-green-200 p-3"
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-zinc-900 text-[18px]">
                  Colaboração
                </h3>
                <p className="text-zinc-500">Trabalho em equipe eficiente</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <HiOutlineRocketLaunch
                size={50}
                className="text-purple-500 rounded-md bg-purple-200 p-3 "
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-zinc-900 text-[18px]">
                  Perfomance
                </h3>
                <p className="text-zinc-500">Aplicações rápidas e otimizadas</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <LiaMedalSolid
                size={50}
                className="text-orange-500 rounded-md bg-orange-200 p-3"
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-zinc-900 text-[18px]">
                  Qualidade
                </h3>
                <p className="text-zinc-500">Padrões de excelência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
