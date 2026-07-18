/* import React from 'react' */
import sobreImg from "../assets/ftSECOND.jpeg"
export const Sobre = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Sobre  <span className="text-neutral-500" >Mim</span>
         </h2>
         <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={sobreImg} alt="Sobre mim img" />
            </div>
                
         </div>
         <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start"></div>
                <p className="my-2 max-w-xl py-6" >Sou desenvolvedor Web e designer Gráfico, formado em Gestão de Sistemas Informáticos, apaixonado por criar experiências digitais modernas, responsivas e intuitivas.

Desenvolvo interfaces utilizando HTML, CSS, JavaScript, React, Tailwind CSS e Bootstrap, sempre aplicando boas práticas de desenvolvimento para garantir desempenho, acessibilidade e uma excelente experiência do utilizador.

Atualmente, estou aprofundando os meus conhecimentos em Node.js e Express.js para expandir as minhas competências no desenvolvimento back-end e na construção de aplicações web completas.

A minha experiência como designer contribui diretamente para o desenvolvimento de websites com foco em UI/UX, criando interfaces visualmente atrativas, funcionais e centradas no utilizador. Estou em constante evolução, aprendendo novas tecnologias e procurando desenvolver soluções que unem design, criatividade e tecnologia para entregar produtos digitais de qualidade.
</p>
                </div>
            </div>
        </div>
  )
}

export default Sobre
