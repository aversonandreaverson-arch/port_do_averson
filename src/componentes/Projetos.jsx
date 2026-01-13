/* import React from 'react' */
import {PROJETOS} from "../const/index.js";

export const Projetos = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projetos</h2>
        <div> {PROJETOS.map((Projetos , index) =>(
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img
            src={Projetos.imagem} 
            width={150} 
            height={150} 
            alt={Projetos.titulo}
            className="mb-6 rounded" /> 
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{Projetos.titulo}</h6>
          <p className="mb-4 text-neutral-400">{Projetos.descricao}</p>
          {Projetos.tecnologias.map((tecno , index)=>(
              <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                {tecno}
              </span>
          ))}
          </div>
          </div>
        ))}</div> 
    </div>
  )
}


export default Projetos