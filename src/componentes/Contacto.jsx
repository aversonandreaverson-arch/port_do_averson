import React from "react";
import { Contactos } from "../const/index.js";

export const Contacto = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">
        Vamos conversar? <br />
        <strong>
          Estou disponível para falar sobre projetos, oportunidades profissionais
          ou colaborações. Escolhe um dos canais abaixo e entra em contacto comigo. <br />
        </strong>
      </h2>

      {/* Botão para baixar CV */}
      <div className="text-center mb-6">
        <a
          href="/CV_AversonWambembe.pdf"   // Colocar o teu CV na pasta public
          download
          className="inline-block px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Baixar meu CV
        </a>
      </div>

      {/* Contatos */}
      <div className="text-center tracking-tighter text-lg">
        <p className="my-4">
          Telefone:{" "}
          <a
            href={`tel:${Contactos.numero_de_Telefone.replace(/\D/g, "")}`}
            className="text-purple-400 hover:underline"
          >
            {Contactos.numero_de_Telefone}
          </a>
        </p>

        <p className="my-4">
          WhatsApp:{" "}
          <a
            href={`https://wa.me/${Contactos.whatsApp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            {Contactos.whatsApp}
          </a>
        </p>

        <p className="my-4">
          E-mail:{" "}
          <a
            href={`mailto:${Contactos.email}`}
            className="text-purple-400 hover:underline"
          >
            {Contactos.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacto;
