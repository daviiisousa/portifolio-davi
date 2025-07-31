import { CardProjetos } from "./cardsUI/CardProjetos";
import desculpaAIImg from "../assets/projetos/desculpaAI.png";
import todoImg from "../assets/projetos/Todo.png";
import automacaoImg from "../assets/projetos/fotoAutomacao.jpg"
import TicketGeneretor from "../assets/projetos/TicketGeneretor.png";

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

  const tecnologiasAutomacaoCertificados = [
    "N8N",
    "Python",
    "Render",
    "Fpdf-lib",
    "Pillow"
  ]

  const tecnologiasUserLogin = [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JWT",
  ]

  const tecnologiasTicketGeneretor = [
    "htnml",
    "css",
    "javascript"
  ]

  return (
    <section id="projetos" className="p-10">
      <h2 className="text-5xl font-bold text-center mb-3">
        Projetos em Destaque
      </h2>
      <p className="text-zinc-500 text-lg text-center">
        Uma seleção dos meus trabalhos mais recentes e impactantes
      </p>
      <div className="grid grid-cols-2 my-10 gap-5 py-5">
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
          linkProjetoGithub={"https://github.com/daviiisousa/api-certificado.git"}
          />
      </div>
      <h2 className="py-5 text-4xl font-bold text-center">Outros Projetos</h2>
      <div className="grid grid-cols-3 gap-10 py-5">
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
        <CardProjetos
          img={desculpaAIImg}
          titulo={"Usuarios e Autenticação"}
          descricao={
            "Sistema de gerenciamento de usuários com autenticação JWT. Permite registro, login e gerenciamento de perfis. "
          }
          tecnologias={tecnologiasUserLogin}
          linkProjeto={"https://github.com/daviiisousa/User-Login"}
          linkProjetoGithub={"https://github.com/daviiisousa/User-Login"}
        />
        <CardProjetos
          img={TicketGeneretor}
          titulo={"Gerador de Tickets"}
          descricao={
            "Aplicação para geração de tickets personalizados. Permite criar tickets com informações dinâmicas e exportar em PDF."
          }
          tecnologias={tecnologiasTicketGeneretor}
          linkProjeto={"https://ticket-generator-kappa.vercel.app/"}
          linkProjetoGithub={"https://github.com/daviiisousa/Ticket-generator.git"}
        />
      </div>
    </section>
  );
}
