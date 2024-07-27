import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import MainContentIndex from '../components/MainContentIndex'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <NavBarCommon/>
      {/* <div className='h-[85vh]'> */}
      <MainContentIndex />
      {/* </div> */}
      
      <Footer />
    </>
  )
}

export default HomePage
