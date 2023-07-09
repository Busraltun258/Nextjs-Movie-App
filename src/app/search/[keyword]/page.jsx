import React from 'react'
import Movies from '@/app/components/Movies';
const API_KEY = "f9eb0fda73ed40c37fcd46876fd58249";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=en-US&include_adult=false`)
  const data = await res.json();
  console.log(data, "data")
  return (
    <div>

      {
        !data?.results ?
          <div>Film Bulunamadı</div> :

          <div className='flex items-center justify-center flex-wrap gap-3 Imgcontainer '>
            {
              data?.results?.map((dt, i) => (
                <Movies key={i} dt={dt} />
              ))
            }
          </div>



      }
    </div>
  )
}

export default Page