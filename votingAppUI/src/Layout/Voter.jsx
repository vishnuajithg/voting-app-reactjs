import React from 'react'
import Footer from '../components/Footer'
import VoterNavBar from '../components/VoterNavBar'
import { Outlet } from 'react-router-dom'

const Voter = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default Voter
