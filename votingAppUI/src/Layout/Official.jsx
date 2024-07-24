import React from 'react'
import OfficialNavBar from '../components/OfficialNavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Official = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Official
