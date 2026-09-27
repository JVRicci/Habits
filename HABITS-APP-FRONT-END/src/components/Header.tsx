
import {Plus} from 'phosphor-react'

import logoImage from "../assets/logo.svg"

export function Header (){
    return(
    <div className="w-full max-w-3xl mx-auto flex py-4 items-center justify-between">

          <img src={logoImage} alt="Habits" className='h-20  py-4' />

          <button className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:bg-violet-400">
            <Plus size={20} className="text-violet-500"/>
            
            Novo Hábito
          </button>

        </div>
    )
}