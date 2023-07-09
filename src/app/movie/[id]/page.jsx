import React from 'react'
import Image from 'next/image';
const API_KEY = "f9eb0fda73ed40c37fcd46876fd58249";

const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  return await res.json();
}

const Page = async ({ params }) => {

  const id = params.id;

  const movieDetail = await getMovie(id)
  console.log(movieDetail, "movieDetaik")

  return (
    <div className='relative p-7 min-h-screen '>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path
          }`}
     fill
        className=' object-cover '
      ></Image>
      <div className='absolute  '>
        <div className='text-4xl  text-white  font-bold my-3'>{movieDetail?.original_title}</div>
        <div className='w-1/2  text-white my-3'>{movieDetail?.overview}</div>
        <div className=' text-white '>{movieDetail?.release_date}</div>
        <div className='p-2 w-20 rounded-md bg-white text-center cursor-pointer my-3 hover:text-purple-300'>Trial</div>
      </div>
    </div>
  )
}

export default Page