import NavBar from "./componentes/NavBar.jsx";
import Hero from "./componentes/Hero.jsx"; 
import Sobre from "./componentes/Sobre.jsx";
import  Tecnologias  from "./componentes/Tecnologias.jsx";
import  Projetos  from "./componentes/Projetos.jsx";
import Contacto from "./componentes/Contacto.jsx";

function App() {
  return (
     <div className="overflow-x-hidden text-neutral-300 antialiased 
     selection:bg-cyan-300 selection:text-cyan-900"> {/*  mudar as cores dos icones, se quiser mudar o branco, é so trocar onde esta escito natural para green */}

      <div className="fixed top-0 -z-10 h-full w-full" > 
        <div className="absolute top-0 z-[-2] h-screen w-screen
       bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">  {/* esta div é do bg que copiamos do site  */}</div>
      </div>

      
        
        <div className="container mx-auto px-8"> {/* este aqui é a parte do container da logo */}
        
        <NavBar/>
        <Hero />
        <Sobre />
      <Tecnologias />
      <Projetos/>
      <Contacto/>
      

         {/* estamos a importar o conteudo da navbar e da hero no arquivo app */}
        </div>
    </div>
  )
}

export default App
