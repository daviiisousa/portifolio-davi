import { CardProjetos } from "./ui/cardsUI/CardProjetos";
import desculpaAIImg from "../assets/projetos/desculpaAI.png";
import todoImg from "../assets/projetos/Todo.png";
import automacaoImg from "../assets/projetos/fotoAutomacao.jpg";
import TicketGeneretor from "../assets/projetos/ticketGeneretor.png";
import portifolioImg from "../assets/projetos/portifolio.png";
import r3fImg from "../assets/projetos/r3f.png";
import { useRef, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export function Projetos() {
  const scrollRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // velocidade do arrasto
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const tecnologiasDesculpaAI = [
    "React",
    "Prisma",
    "Typescript",
    "Tailwind",
    "API Gemini",
  ];

  const tecnologiasTodo = [
    "React",
    "Typescrit",
    "ShadCN",
    "Express",
    "Sequelize",
  ];

  const tecnologiasAutomacaoCertificados = [
    "N8N",
    "Python",
    "Render",
    "Fpdf-lib",
    "Pillow",
  ];

  const tecnologiasUserLogin = [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JWT",
  ];

  const tecnologiasTicketGeneretor = ["htnml", "css", "javascript"];

  const tecnologiasPortifolio = ["React", "Tailwind", "Vite", "javascript"];

  return (
    <section id="projetos" className="p-10">
      <h2 className="text-5xl font-bold text-center mb-3 max-sm:text-4xl">
        Projetos em Destaque
      </h2>
      <p className="text-zinc-500 text-lg text-center">
        Uma seleção dos meus trabalhos mais recentes e impactantes
      </p>
      <div className="grid grid-cols-2 my-10 gap-5 py-5 max-lg:flex max-lg:flex-col">
        <CardProjetos
          img={desculpaAIImg}
          descricao={
            "Aplicação fullstack que utiliza inteligência artificial para gerar pedidos de desculpa criativos e convincentes para diferentes situações do cotidiano."
          }
          tecnologias={tecnologiasDesculpaAI}
          titulo={"Desculp.AI"}
          linkProjeto={"https://desculpai.vercel.app/"}
          linkProjetoGithub={"https://github.com/daviiisousa/desculpai-web"}
        />

        <CardProjetos
          img={automacaoImg}
          titulo={"Automação de Certificados"}
          descricao={
            "Sistema de automação para geração de certificados personalizados. Preenchimento automático de dados e download dos certificados em PDF."
          }
          tecnologias={tecnologiasAutomacaoCertificados}
          linkProjeto={"https://github.com/daviiisousa/api-certificado.git"}
          linkProjetoGithub={
            "https://github.com/daviiisousa/api-certificado.git"
          }
        />
      </div>
      <h2 className="py-5 text-4xl font-bold text-center max-sm:text-3xl">
        Outros Projetos
      </h2>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 10 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <FaRegHandPointRight
          size={25}
          className="text-zinc-500 md:hidden mx-auto"
        />
      </motion.div>
      <div className="w-full py-5">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="flex gap-10 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700  scrollbar-thumb-rounded-full select-none "
        >
          <div className="flex-shrink-0 w-[500px] max-sm:w-full">
            <CardProjetos
              img={todoImg}
              titulo={"Todo Tarefa"}
              descricao={
                "Aplicação web completa (frontend + backend) para gerenciamento de tarefas. O usuário pode criar, editar, concluir e excluir tarefas. Desenvolvido com foco em boas práticas, arquitetura MVC e integração via API RESTful."
              }
              tecnologias={tecnologiasTodo}
              linkProjeto={"https://todo-tarefa.vercel.app/"}
              linkProjetoGithub={"https://github.com/daviiisousa/Todo-tarefa"}
            />
          </div>

          <div className="flex-shrink-0 w-[500px] max-sm:w-full">
            <CardProjetos
              img={desculpaAIImg}
              titulo={"Usuarios e Autenticação"}
              descricao={
                "Sistema de gerenciamento de usuários com autenticação JWT. Permite registro, login e gerenciamento de perfis."
              }
              tecnologias={tecnologiasUserLogin}
              linkProjeto={"https://github.com/daviiisousa/User-Login"}
              linkProjetoGithub={"https://github.com/daviiisousa/User-Login"}
            />
          </div>

          <div className="flex-shrink-0 w-[500px] max-sm:w-full">
            <CardProjetos
              img={TicketGeneretor}
              titulo={"Gerador de Tickets"}
              descricao={
                "Aplicação para geração de tickets personalizados. Permite criar tickets com informações dinâmicas e exportar em PDF."
              }
              tecnologias={tecnologiasTicketGeneretor}
              linkProjeto={"https://ticket-generator-kappa.vercel.app/"}
              linkProjetoGithub={
                "https://github.com/daviiisousa/Ticket-generator.git"
              }
            />
          </div>
          <div className="flex-shrink-0 w-[500px] max-sm:w-full">
            <CardProjetos
              img={portifolioImg}
              titulo={"Portfólio Pessoal"}
              descricao={
                "Meu portfólio pessoal, onde apresento meus projetos, habilidades e experiências. Desenvolvido com foco em design responsivo e usabilidade."
              }
              tecnologias={tecnologiasPortifolio}
              linkProjeto={"https://portifolio-davi-rose.vercel.app/"}
              linkProjetoGithub={
                "https://github.com/daviiisousa/portifolio-davi"
              }
            />
          </div>
          <div className="flex-shrink-0 w-[500px] max-sm:w-full">
            <CardProjetos
              img={r3fImg}
              titulo={"Ref + Framer Motion"}
              descricao={
                "Projeto 3D interativo utilizando React Three Fiber e Framer Motion. Criação de animações e interações avançadas para uma experiência imersiva."
              }
              tecnologias={tecnologiasPortifolio}
              linkProjeto={"https://poc-r3f-framer.vercel.app/"}
              linkProjetoGithub={
                "https://github.com/daviiisousa/poc-R3f-Framer"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
