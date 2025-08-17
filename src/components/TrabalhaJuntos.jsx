import { IconButton } from "./ui/iconButton";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiMapPin2Line } from "react-icons/ri";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import { FiSend } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export function TrabalharJuntos() {
  return (
    <section
      id="contato"
      className="w-full bg-linear-65 from-blue-50 to-white p-10"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl  font-bold p-10">Vamos Trabalhar Juntos</h1>
        <p className="text-2xl text-center text-zinc-500 max-w-1/2 mb-10">
          Tem um projeto em mente? Adoraria saber mais sobre sua ideia e como
          posso ajudar a torná-la realidade.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Entre em Contato</h2>
          <p className="text-lg text-zinc-500 ">
            Estou sempre aberto a discutir novos projetos, oportunidades
            criativas ou parcerias. Não hesite em entrar em contato se quiser
            conversar sobre tecnologia, desenvolvimento ou qualquer ideia
            interessante.
          </p>
          <div className="flex flex-col gap-5">
            <IconButton
              icon={
                <MdOutlineEmail
                  size={50}
                  className="text-red-500 rounded-md bg-red-200 p-3"
                />
              }
              title={"Email"}
              description={"sousadavi248@gmail.com"}
            />
            <IconButton
              icon={
                <FiPhone
                  size={50}
                  className="text-green-500 rounded-md bg-green-200 p-3"
                />
              }
              title={"Telefone"}
              description={"(85) 98787-7534"}
            />
            <IconButton
              icon={
                <RiMapPin2Line
                  size={50}
                  className="text-purple-500 bg-purple-200 rounded-md p-3"
                />
              }
              title={"Localizção"}
              description={"Fortaleza, Ceará, Brasil"}
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-[18px] font-medium">Me encontre nas redes</h3>
            <div className="flex gap-2">
              <IconButton
                icon={
                  <FiGithub
                    size={50}
                    className="p-3 rounded-md shadow-primary"
                  />
                }
              />
              <IconButton
                icon={
                  <CiLinkedin
                    size={50}
                    className="p-3 rounded-md shadow-primary text-blue-500"
                  />
                }
              />
            </div>
          </div>
        </div>
        <div>
          <form className="p-10 bg-white rounded-md w-full shadow-primary space-y-3">
            <h2 className="font-bold text-2xl">Envie uma Mensagem</h2>
            <div className="grid grid-cols-2 gap-5">
              <Input
                label={"Nome"}
                id={"nome"}
                name={"name"}
                type={"text"}
                placeholder={"Seu nome"}
              />
              <Input
                label={"Email"}
                id={"email"}
                name={"email"}
                placeholder={"seu@email.com"}
                type={"email"}
              />
            </div>
            <Input
              label={"Assunto"}
              id={"assunto"}
              name={"subject"}
              type={"text"}
              placeholder={"Assunto da mensagem"}
            />
            <Input
              label={"Mensagem"}
              id={"mensagem"}
              name={"message"}
              type={"text"}
              placeholder={"Conte-me sobre seu projeto ou ideia"}
            />
            <Button
              theme={"gradient"}
              type={"submit"}
              className={"w-full flex items-center justify-center gap-3"}
            >
              <FiSend />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
