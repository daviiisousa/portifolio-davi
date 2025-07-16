import { CardProjetos } from "./cardsUI/CardProjetos";

export function Projetos(){
    return(
        <section className="p-10">
            <h2 className="text-5xl font-bold text-center mb-3">Projetos em Destaque</h2>
            <p className="text-zinc-500 text-lg text-center">Uma seleção dos meus trabalhos mais recentes e impactantes</p>
            <div className="grid grid-cols-3 my-10">
            <CardProjetos img={'./imgSobre.jpg'} descricao={'Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Inclui sistema de pagamentos, gestão de produtos e painel administrativo.'} tecnologias={'teste'}  titulo={'E-commerce Platform'}/>
            </div>
        </section>
    )
}