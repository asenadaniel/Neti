import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import './Home.css'
import { Info, PlayArrow } from '@mui/icons-material'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div className=' '>
      <Navbar />
      <div className=' relative'>

        <img src={heroBanner} alt="" className=' w-full custom-mask' />
        <div className=' absolute w-full pl-[6%] md:bottom-0 top-[30px] sm:top-[100px] md:top-[200px]  lg:top-[300px]  xl:top-[199px] 2xl:top-[340px]  '>
          <img src={heroTitle} alt="" className=' w-[40%] max-w-[430px] lg:mb-8 mb-[10px]' />
          <p className=' max-w-[700px] text-xs mb-5  lg:pl-0 '>
            Hakan, a shopkeeper, discovers his role in protecting Istanbul from immortals, balancing duty and love, uncovering the power within their blood.</p>
          <div className=' flex gap-14 mb-9'>
            <button className=' mb-8 lg:mb-0 border-0 outline-0 py-2 px-5 items-center gap-3 text-xs font-semibold bg-white cursor-pointer rounded hover:bg-[#ffffffbf] text-black'><PlayArrow />Play </button>
            <button className=' mb-8 lg:mb-0 border-0 outline-0 py-2 px-5 items-center gap-3 text-xs font-medium cursor-pointer rounded text-white bg-gray-300 bg-opacity-40 hover:bg-[#6d6d6e66]'>
              <Info /> More Info
            </button>
          </div>
          <div className=' hidden xl:block'>
            <TitleCards />

          </div>
        </div>
      </div>
      <div className=' pl-[6%]'>
        <TitleCards title={'Blockbusters Movies'} category={'now_playing'} />
        <TitleCards title={'Only on Neti'} category={'upcoming'} />
        <TitleCards title={'Upcoming'} category={'popular'} />
        <TitleCards title={'Top Picks for You'} category={'top_rated'} />
      </div>
      <Footer />
    </div>
  )
}

export default Home;