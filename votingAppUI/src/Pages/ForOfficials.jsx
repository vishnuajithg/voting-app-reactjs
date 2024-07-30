import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import OfficialLogin from '../components/OfficialLogin'
import Footer from '../components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const ForOfficials = () => {
  return (
    <>
      <NavBarCommon/>
      <OfficialLogin/>
      <ToastContainer  />
      <Footer/>
    </>
  )
}

export default ForOfficials
