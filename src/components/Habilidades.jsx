import { GoDeviceDesktop } from "react-icons/go";
import { CardHabilidades } from "./ui/cardsUI/CardHabilidades";
import { FaDatabase, FaLock } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";
import { ScrollAnimation } from "./ui/ScrollAnimation";

export function Habilidades() {
  const habilidadesFront = [
    "React",
    "Typescript",
    "Tailwind",
    "Next",
    "ContextAPI",
  ];
  const habilidadesBack = ["Sequelize", "Node", "Express", "JWT", "Bcrypt"];
  const habilidadesDatabase = ["Postgres", "Supabase", "MariaDB"];
  const habilidadesTools = ["Git", "Github", "Jira", "Insomnia", "Bitbucket"];
  return (
    <section
      id="habilidades"
      className="bg-linear-65 from-blue-50 to-white p-10"
    >
      <ScrollAnimation>
        <h2 className="text-5xl font-bold text-center mb-5 max-sm:text-4xl">
          Habilidades Técnicas
        </h2>
        <p className="text-center mb-10 text-zinc-500 text-lg max-sm:text-sm">
          Tecnologias e ferramentas que domino para criar soluções completas
        </p>
        <div className="grid grid-cols-2 gap-10 max-sm:gap-5 max-sm:grid-cols-1">
          <CardHabilidades
            titulo={"Frontend"}
            icon={<GoDeviceDesktop size={25} className="text-blue-500" />}
            habilidades={habilidadesFront}
          />
          <CardHabilidades
            titulo={"Backend"}
            icon={<FaLock size={25} className="text-green-500" />}
            habilidades={habilidadesBack}
          />
          <CardHabilidades
            titulo={"Database"}
            icon={<FaDatabase size={25} className="text-purple-500" />}
            habilidades={habilidadesDatabase}
          />
          <CardHabilidades
            icon={<IoGitBranchOutline size={25} className="text-orange-500" />}
            titulo={"Tools"}
            habilidades={habilidadesTools}
          />
        </div>
      </ScrollAnimation>
    </section>
  );
}
