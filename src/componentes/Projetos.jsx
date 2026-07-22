import React from "react";
import { PROJETOS } from "../const/index.js";

export const Projetos = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projetos</h2>

      <div>
        {PROJETOS.map((projeto, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Imagem do projeto */}
            <div className="w-full lg:w-1/4">
              <img
                src={projeto.imagem}
                width={150}
                height={150}
                alt={projeto.titulo}
                className="mb-6 rounded"
              />
            </div>

            {/* Informações do projeto */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{projeto.titulo}</h6>
              <p className="mb-4 text-neutral-400">{projeto.descricao}</p>

              {/* Tecnologias */}
              {projeto.tecnologias.map((tecno, i) => (
                <span
                  key={i}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tecno}
                </span>
              ))}

              {/* Botão de link externo */}
              {projeto.Link && (
                <a
                  href={projeto.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-purple-400 hover:underline"
                >
                  Ver projeto completo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
