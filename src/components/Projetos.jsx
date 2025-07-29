import { CardProjetos } from "./cardsUI/CardProjetos";
import desculpaAIImg from "../assets/projetos/desculpaAI.png";
import todoImg from "../assets/projetos/Todo.png";

export function Projetos() {
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

  return (
    <section id="projetos" className="p-10">
      <h2 className="text-5xl font-bold text-center mb-3">
        Projetos em Destaque
      </h2>
      <p className="text-zinc-500 text-lg text-center">
        Uma seleção dos meus trabalhos mais recentes e impactantes
      </p>
      <div className="grid grid-cols-3 my-10 gap-5">
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
          img={todoImg}
          titulo={"Todo Tarefa"}
          descricao={
            "Aplicação web completa (frontend + backend) para gerenciamento de tarefas. O usuário pode criar, editar, concluir e excluir tarefas. Desenvolvido com foco em boas práticas, arquitetura MVC e integração via API RESTful."
          }
          tecnologias={tecnologiasTodo}
          linkProjeto={'https://todo-tarefa.vercel.app/'}
          linkProjetoGithub={"https://github.com/daviiisousa/Todo-tarefa"}
        />
      </div>
    </section>
  );
}
