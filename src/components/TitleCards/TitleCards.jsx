import React, { useEffect, useRef, useState } from 'react'
import cards_data from '../../assets/cards/Cards_data'
import './titleCard.css'
import { Link } from 'react-router-dom'

function TitleCards({ title, category }) {

  const [data, setData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ1ZDljOGMwNWNhMTkyNWMzZGQ2OWM3NzhlNDMyNiIsInN1YiI6IjY2M2EyNGQzZTMyM2YzMDEyNWRhYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtvLvGp2Krb8sBJDeoUfv4EyLaxFY3itYPXCgTGy8YE'
    }
  };


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(err => console.error(err));
  }, [])


  return (
    <div className=' mt-14 mb-8'>
      <h2 className=' mb-2 font-bold'>
        {title ? title : 'Popular on Netflix'}
      </h2>
      <div className=' flex gap-3 overflow-x-scroll scroll ' >
        {data.map((card, i) => {
          return (
            <Link to={`/media/${card.id}`} key={i} className=' relative '>
              <img className=' md:max-w-[240px] max-w-[200px]   rounded cursor-pointer' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p className=' absolute bottom-3 right-3 text-[12px] md:text-[15px] '>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards
