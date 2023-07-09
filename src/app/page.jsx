import React from 'react'
import Movies from './components/Movies';
const API_KEY ="f9eb0fda73ed40c37fcd46876fd58249";

const Page= async({searchParams}) => {
    
    const res = await fetch(
        `https://api.themoviedb.org/3/${
          searchParams.genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );
    

    const data=await res.json();
    // console.log("data",data)
    console.log(searchParams.genre,"searchparaös")
    return (
        <div className='flex flex-wrap justify-center p-3 gap-4 '>
    
        {
            data?.results?.map((dt,i)=>(
                <Movies key={i} dt={dt}/>
            ))
        }
        </div>

    )
}

export default Page