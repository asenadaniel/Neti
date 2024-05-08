import { ArrowBack } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Media() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    key: '',
    type: '',
    published_at: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ1ZDljOGMwNWNhMTkyNWMzZGQ2OWM3NzhlNDMyNiIsInN1YiI6IjY2M2EyNGQzZTMyM2YzMDEyNWRhYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtvLvGp2Krb8sBJDeoUfv4EyLaxFY3itYPXCgTGy8YE'
    }
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setData(response.results[0]))
      .catch(err => console.error(err));

  }, [])


  return (
    <div className=' h-[100vh] flex flex-col justify-center items-center'>
      <ArrowBack className=' absolute top-5 left-5 cursor-pointer' onClick={() => navigate('/')} />
      <iframe className=' rounded-md'
        src={`https://www.youtube.com/embed/${data.key}`}
        title='Trailer'
        frameborder="0"
        height={'90%'}
        width={'90%'}
        allowFullScreen></iframe>
      <div className=' flex items-center justify-between w-[90%] '>
        <p>{data.published_at.slice(0, 10)}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  )
}

export default Media
