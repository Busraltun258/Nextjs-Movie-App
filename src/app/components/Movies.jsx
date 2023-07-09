"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Movies = ({ dt }) => {
    const router = useRouter();
    console.log(dt)
    return (
        <div onClick={()=>router.push(`/movie/${dt?.id}`)}className='min-w-[400] h-[300] flex items-center hover:scale-95 relative'>
            <Image
                src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path
                    }`}
                width={500}
                height={300}
                className='rounded-xl text-end'
            ></Image>
            <div className='absolute bottom-0 p-2  text-white '>
                <div className=' text-xl font-bold'>{dt?.original_title}</div>
                <div>{dt?.vote_average}</div>
                <div >{dt?.release_date}</div>

            </div>

        </div>
    )
}

export default Movies