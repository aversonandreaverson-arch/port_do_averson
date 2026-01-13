/* import React from 'react' */
import ProfilePic from "../assets/foto-perfil3.jpeg";

export const Hero = () => {
  return (
     /* para ter esta parte de cima, escrevemos Rafc E EM SEGUIDA CLICAMOS NO ENTER */
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" >
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Áverson Wambembe</h1> {/* é paraa mexer no nome */}
                <span className="bg-linear-to-r from-blue-300 via-purple-500 to-blue-500 bg-clip-text text-3xl tracking-tight text-transparent" >
                    FRONT-END DEVELOPER
                </span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">Desenvolvedor Web & Designer Digital |
Criação de soluções modernas, funcionais e orientadas a resultados</p>
             </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={ProfilePic} alt="Áverson Wambembe" />

            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
