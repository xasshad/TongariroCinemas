import requests from '../Request'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.random() * movies.length]

    useEffect(()=> {
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results);
        });
    }, []);

    console.log(movie)

  return (
    <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />

        </div>

    </div>
  )
}

export default Main