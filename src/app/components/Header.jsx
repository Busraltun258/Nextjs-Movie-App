"use client"
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import MenuItem from './MenuItem'
import Themes from './Themes'
import { useRouter } from 'next/navigation'

const Header = () => {
    const [keyword,setKeyword]=useState("")
    const router=useRouter();



    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign Up",
            url: "/login"
        }
    ]

    const searchFunc=(e)=>{
        if(e.key==="Enter" && keyword.length>=3){
            router.push(`/search/${keyword}`)
            setKeyword("")

           
        }
        


    }
    return (
        <div className='flex items-center h-30 gap-3 p-3'>
            <div className=' bg-purple-500 p-2 font-bold text-xl text-white rounded-md'>MovieApp</div>
            <div className='flex flex-1 items-center gap-2 border p-3 rounded-md'>
                <input value={keyword} onKeyDown={searchFunc} onChange={e=>setKeyword(e.target.value)}className='outline-none flex-1 bg-transparent ' type='text' placeholder='Arama Yapınız' />
                <BiSearch size={25} />
            </div>
            <div className="text-indigo-500">
                <Themes/>
            </div>

            {
                menu.map((mn, i) => (

                    <MenuItem  mn={mn} key={i} />


                ))
            }
        </div>
    )
}

export default Header