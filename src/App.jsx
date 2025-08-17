import { Button } from "./components/ui/Button";
import { Header } from "./components/layout/Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Sobre } from "./components/Sobre";
import { motion } from "framer-motion";
import { Habilidades } from "./components/Habilidades";
import { Projetos } from "./components/Projetos";
import { TrabalharJuntos } from "./components/TrabalhaJuntos";
import { Footer } from "./components/layout/Footer";
import { textGradient } from "./utils/style";

export function App() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <main className="h-full w-full ">
        <section
          id="inicio"
          className="w-full h-full py-30 bg-linear-65 from-blue-50 to-white"
        >
          <motion.div
            className="w-full flex flex-col justify-center items-center h-full"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold">Olá, eu sou</h1>
            <h2 className={`text-6xl font-bold ${textGradient} mb-5`}>
              Davi Sousa Alves
            </h2>
            <p className="text-2xl w-[800px] text-center mb-5 text-gray-500">
              Desenvolvedor FullStack apaixonado por criar experiências digitais
              incríveis e soluções inovadoras que fazem a diferença
            </p>
            <div className=" flex gap-5 my-5">
              <Button type={"button"} theme={"gradient"}>
                <a href="#projetos"> Ver Meus Projetos</a>
              </Button>
              <Button type={"button"}>
                <a
                  href="curriculo-davi-dev.pdf"
                  download={"certificado-davi.pdf"}
                >
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
        <Sobre />
        <Habilidades />
        <Projetos />
        <TrabalharJuntos />
      </main>
      <Footer />
    </div>
  );
}
