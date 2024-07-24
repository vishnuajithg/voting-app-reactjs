import React from 'react'
import CandidateNavBar from '../components/CandidateNavBar'
import NavBarCommon from '../components/NavBarCommon'
import Footer from '../components/Footer'
import ViewResult from './ViewResult'

const ViewResultCandidate = () => {
  return (
    <>
    <NavBarCommon/>
      <CandidateNavBar/>
      <ViewResult/>
      <br />    
      <Footer/>
    </>
  )
}

export default ViewResultCandidate
