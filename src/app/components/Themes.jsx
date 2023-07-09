"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

import {CiDark, CiLight} from "react-icons/ci"



const Themes = () => {

    const { systemTheme,theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
      }, [])

      const themeMode=theme==="system" ?  systemTheme:theme
      console.log(themeMode)

      if (!mounted) {
        return null
      }
  return (
    <div>
        {
            mounted && (
                themeMode=="dark" ?
                <CiLight onClick={()=>setTheme("light")} className='cursor-pointer' size={25}/> :
                <CiDark onClick={()=>setTheme("dark")}className='cursor-pointer' size={25}/> 

            )
        }
     
          
            
      
    </div>
  )
}

export default Themes