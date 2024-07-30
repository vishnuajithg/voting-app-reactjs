import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import CandidateLogin from '../components/CandidateLogin'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForCandidates = () => {
  return (
    <>
      <NavBarCommon/>
      <br />
      <CandidateLogin/>
      <ToastContainer  />
    <br /><br /><br /><br /><br /><br /> <br />
      <Footer/>
    </>
  )
}

export default ForCandidates
