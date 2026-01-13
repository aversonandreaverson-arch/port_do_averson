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
                <p className="my-2 max-w-xl py-6" >Sou desenvolvedor web e designer digital, com formação em Gestão de Sistemas Informáticos. Tenho experiência no desenvolvimento de interfaces modernas, responsivas e funcionais, utilizando HTML, CSS, JavaScript, React, Tailwind CSS e Bootstrap.
No design digital, utilizo ferramentas como Canva para criar layouts visuais consistentes e alinhados à experiência do usuário. Busco constantemente aprimorar minhas habilidades, aplicando boas práticas de código, com foco em usabilidade, desempenho e qualidade visual.
                       </p>
                </div>
            </div>
        </div>
  )
}

export default Sobre
