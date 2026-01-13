/* import React from 'react' */
import {Contactos} from "../const/index.js";

export const Contacto = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Vamos conversar?  <br/> <strong>
            Estou disponível para falar sobre projetos, oportunidades profissionais ou colaborações.
            Escolhe um dos canais abaixo e entra em contacto comigo. <br/>
        </strong>
            
        </h2>
        <div className="text-center tracking-tighter">
            <p className="my-4"> Telefone:{Contactos.numero_de_Telefone}</p>
             <p className="my-4">WhatsApp: {Contactos.whatsApp}</p>
             <a className="border-b"  href="#"> E-mail:  {Contactos.email}</a>
        </div>
    </div>

)
}

export default Contacto
