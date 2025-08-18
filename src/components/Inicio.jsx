import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { gradient } from "../utils/style";
import { Button } from "./ui/Button";

export function Inicio() {
  return (
    <section
      id="inicio"
      className="w-full h-full py-30 bg-linear-65 from-blue-50 to-white max-lg:px-10"
    >
      <motion.div
        className="w-full flex flex-col justify-center items-center h-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold max-lg:text-4xl">Olá, eu sou</h1>
        <h2
          className={`text-6xl font-bold ${gradient.textGradientPrimary} mb-5 max-lg:text-4xl max-sm:text-3xl`}
        >
          Davi Sousa Alves
        </h2>
        <p className="text-2xl max-w-[800px] text-center mb-5 text-gray-500 max-lg:text-lg">
          Desenvolvedor FullStack apaixonado por criar experiências digitais
          incríveis e soluções inovadoras que fazem a diferença
        </p>
        <div className=" flex gap-5 my-5 max-sm:flex-col max-sm:items-center">
          <Button type={"button"} theme={"gradient"}>
            <a href="#projetos"> Ver Meus Projetos</a>
          </Button>
          <Button type={"button"}>
            <a href="curriculo-davi-dev.pdf" download={"certificado-davi.pdf"}>
              Dowload CV
            </a>
          </Button>
        </div>
        <div className="flex items-center my-5 gap-5">
          <a href="https://github.com/daviiisousa" target="_blanck">
            <FaGithub className="text-gray-500" size={45} />
          </a>
          <a
            href="https://www.linkedin.com/in/davi-sousa-alves"
            target="_blanck"
          >
            <FaLinkedin className="text-gray-500" size={45} />
          </a>
          <a href="mailto:sousadavi248@gmail.com" target="_blanck">
            <MdEmail className="text-gray-500" size={45} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
