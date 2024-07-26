import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import OfficialNavBar2 from '../components/OfficialNavBar2'
import ViewResult from './ViewResult'
import Footer from '../components/Footer'
import OfficialNavBar from '../components/OfficialNavBar'

const ViewResultOfficial = () => {
  return (
    <>
      <OfficialNavBar/>
      <OfficialNavBar2/>
      <ViewResult/>
      <Footer/>
    </>
  )
}

export default ViewResultOfficial
