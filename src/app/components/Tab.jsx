"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from "next/navigation"
const Tab = () => {
    const searchParams = useSearchParams();

    const genre = searchParams.get("genre")
    console.log(genre)
    const tabs = [
        {
            name: "En Populer",
            url: "on_the_air"

        },
        {
            name: "En Son",
            url: "now_playing"
        },
        {
            name: "Yakında Gelecekler",
            url: "tupcoming"
        }
    ]
    return (

        <div className='flex gap-3 items-center justify-center bg-violet-200 p-6 text-xl text-slate-600 ' >
            {
                tabs.map((tab, i) => (
                    <div key={i}>
                        <Link className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url===genre ?"text-purple-600 underline underline-offset-8":"text-black" }`} href={`/?genre=${tab.url}`}>{tab.name}</Link>

                    </div>
                ))
            }


        </div>
    )
}

export default Tab