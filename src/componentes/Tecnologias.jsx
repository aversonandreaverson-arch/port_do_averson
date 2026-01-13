/* import React from 'react' */
import {RiReactjsLine} from "react-icons/ri"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { DiJavascript } from "react-icons/di"
import { RiTailwindCssLine } from "react-icons/ri"
import { DiMysql } from "react-icons/di"
import { SiCanva } from "react-icons/si"
import { DiGit } from "react-icons/di"
import { BsGithub } from "react-icons/bs"
import { MdOutlineDesignServices } from "react-icons/md";

import { RiBootstrapLine } from "react-icons/ri"

export const Tecnologias = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
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
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCanva className="text-7xl text-cyan-500"/>
            </div>
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
                <RiBootstrapLine className="text-7xl text-purple-600"/>
            </div>
        </div>
    </div>
  )
}


export default Tecnologias
