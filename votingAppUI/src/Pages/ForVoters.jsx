import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import VoterLogin from '../components/VoterLogin'
import Footer from '../components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const ForVoters = () => {
  return (
    <>
      <NavBarCommon/>
      <VoterLogin/>
      <ToastContainer  />
      <Footer/>  
    </>
  )
}

export default ForVoters
