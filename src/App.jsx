import { Header } from "./components/layout/Header";
import { Sobre } from "./components/Sobre";
import { Habilidades } from "./components/Habilidades";
import { Projetos } from "./components/Projetos";
import { TrabalharJuntos } from "./components/TrabalhaJuntos";
import { Footer } from "./components/layout/Footer";
import { Inicio } from "./components/Inicio";

export function App() {
  return (
    <div className="w-full flex flex-col min-h-screen ">
      <Header />
      <main className="h-full w-full ">
        <Inicio />
        <Sobre />
        <Habilidades />
        <Projetos />
        <TrabalharJuntos />
      </main>
      <Footer />
    </div>
  );
}
