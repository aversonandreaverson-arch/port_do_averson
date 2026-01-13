import logo from "../assets/logo2.png"   /* caso queira usar uma logo*/  
import { FaLinkedin } from "react-icons/fa" /* se der problema, apaga o 6 */
import { FaGithub } from "react-icons/fa"  /* se der problema, apaga o 6 */
import { FaBehance} from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"  /* se der problema, apaga o 6 */

export const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        {/* 1 div */}
       {/* logotipo */} <div className="flex shrink-0 items-center">
            

        <img className="mx-1 w-30 " src={logo} alt="logo" />   {/* mx-2 w-10 é para mexer o tamanho da logo */} 
        </div>


        <div className="m-8 flex items-center justify-center gap-4 text-2xl">  {/* é para colocar os icones alinhados */}
          <a href="https://www.linkedin.com/in/%C3%A1verson-wambembe-3a307729b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin /> 
          </a>
           <a href="https://www.instagram.com/avrson_wamb?igsh=MTZpMTB3Njc3ZmpkMQ==">
              <FaInstagram />
           </a> 
           <a href="https://github.com/aversonandreaverson-arch">
                <FaGithub />           
           </a>
        

        <a href="https://www.behance.net/versondaniel">
            <FaBehance />
        </a>
        

        </div>
        
    </nav>
    
  )
}

export default NavBar