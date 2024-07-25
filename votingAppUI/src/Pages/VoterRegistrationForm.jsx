import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VoterRegistrationForm = () => {
    const navigate = useNavigate()
   
    const [fullName,setFullName] = useState('')
    const [studentId,setStudentId] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [stream, setStream] = useState('')
    const [year, setYear] = useState('')
    const [password, setPassword] = useState('')
  
    const voterRegFormSubmit = async (voterRegData)=>{
      console.log(voterRegData)
      const res = await fetch('/api/voter/voterRegistrationForm',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(voterRegData)
      })
      if(res.ok){
        alert('Registration Complete')
        return navigate('/forVoters')
        // resend('posted')
    }
    else{
        alert('Error')
        return navigate('/voterRegistrationForm')
        // res.send(500)
  
    }
    }
  
    const getVoterRegForm = (e)=>{
      e.preventDefault();
      const voterRegData = {
        fullName,studentId, dob, email, phone, stream, year, password
      }
      voterRegFormSubmit(voterRegData)
    }
  return (
    <>
      <NavBarCommon/>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
    <h1 className="text-2xl font-bold mb-6 text-center">Voter Registration</h1>
    <form  onSubmit={getVoterRegForm} action="#" method="POST">
        
        <div className="mb-4">
            <label htmlFor="full_name" className="block text-gray-700 font-bold mb-2">Full Name:</label>
            <input type="text" value={fullName}
                onChange={(e)=>{
                  setFullName(e.target.value)
                }} id="full_name" name="full_name" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
       
        <div className="mb-4">
            <label htmlFor="student_id" className="block text-gray-700 font-bold mb-2">Student ID:</label>
            <input type="text" value={studentId}
                onChange={(e)=>{
                  setStudentId(e.target.value)
                }} id="student_id" name="student_id" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        
        <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
            <input type="date" value={dob}
                onChange={(e)=>{
                  setDob(e.target.value)
                }} id="dob" name="dob" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address:</label>
            <input type="email" value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }} id="email" name="email" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required/>
        </div>
        
        <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
            <input type="text" value={phone}
                onChange={(e)=>{
                  setPhone(e.target.value)
                }} id="phone" name="phone" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        
        <div className="mb-4">
            <label htmlFor="stream" className="block text-gray-700 font-bold mb-2">Stream of Studying:</label>
            <input type="text" value={stream}
                onChange={(e)=>{
                  setStream(e.target.value)
                }} id="stream" name="stream" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>

        <div className="mb-4">
            <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year of Studying:</label>
            <input type="text" value={year}
                onChange={(e)=>{
                  setYear(e.target.value)
                }} id="year" name="year" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input type="password" value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }} id="password" name="password" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        <div className="mb-4">
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Registration</button>
        </div>
    </form>
</div>
<br />
      <Footer/>

    </>
  )
}

export default VoterRegistrationForm
