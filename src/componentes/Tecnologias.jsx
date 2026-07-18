/* import React from 'react' */
import {RiReactjsLine} from "react-icons/ri"
import { DiHtml5, DiNodejs } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { DiJavascript } from "react-icons/di"
import { RiTailwindCssLine } from "react-icons/ri"
import { DiMysql } from "react-icons/di"
import { SiCanva, SiDepositphotos } from "react-icons/si"
import { DiGit } from "react-icons/di"
import { BsGithub } from "react-icons/bs"
import { MdOutlineDesignServices } from "react-icons/md";

import { RiBootstrapLine } from "react-icons/ri"
import { DiPhotoshop } from "react-icons/di"
import { DiIllustrator } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si"

export const Tecnologias = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl"> FrontEnd</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
             <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-orange-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className="text-7xl text-blue-500"/>
            </div>
             <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className="text-7xl text-sky-400"/>
            </div>
           
        </div>
                <div>
                    <h2 className="my-20 text-center text-4xl">Backend</h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">    
                    
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <DiNodejs className="text-7xl text-green-500"/>
                        </div>
                    
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <SiExpress className="text-7xl text-green-900"/>
                        </div>   
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-blue-400"/>
            </div>
                    </div>
                </div>
                            

                <div>
                        <h2 className="my-20 text-center text-4xl">Ferramentas</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsGithub className="text-7xl text-neutral-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiGit className="text-7xl text-red-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <MdOutlineDesignServices className="text-7xl text-blue-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhotoshop  className="text-7xl text-blue-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiIllustrator className="text-7xl text-orange-600"/>
            </div>
           
        </div>
                </div>

                              

    
                

        
        
    </div>

    

  )
}


export default Tecnologias
