import React from 'react'
import HomeStart from './Component/Pages/HomeStart/HomeStart'
import HomeContent2 from './Component/Pages/HomeContent2/HomeContent2'
import HomeContent3 from './Component/Pages/HomeContent3/HomeContent3'
import HomeContent from './Component/Pages/HomeContent/HomeContent'
import Footer from './Component/Footer/Footer'

const Home = () => {
  return (
    <>
      <HomeStart />
      <HomeContent />
      <HomeContent2 />
      <HomeContent3 />
      <Footer />
  </>
  )
}

export default Home