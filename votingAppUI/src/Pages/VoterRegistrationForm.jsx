import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VoterRegistrationForm = () => {
    const navigate = useNavigate()
   
    const [fullName,setFullName] = useState('')
    const [stdId,setStdID] = useState('')
    const [stdDob, setStdDob] = useState('')
    const [email, setEmail] = useState('')
    const [stdMob,setStdMob] = useState('')
    const [stdStreamStudy, setStdStreamStudy] = useState('')
    const [stdYear, setStdYear] = useState('')
    const [password, setPassword] = useState('')
  
    const voterRegFormSubmit = async (voterRegData)=>{
      console.log(voterRegData)
      const res = await fetch('http://localhost:5000/voterRegistrationForm',{
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
        fullName,stdId, stdDob, email, stdMob, stdStreamStudy, stdYear, password
      }
      voterRegFormSubmit(voterRegData)
    }
  return (
    <>
      <NavBarCommon/>
      <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
    <h1 class="text-2xl font-bold mb-6 text-center">Voter Registration</h1>
    <form  onSubmit={getVoterRegForm} action="#" method="#">
        
        <div class="mb-4">
            <label for="full_name" class="block text-gray-700 font-bold mb-2">Full Name:</label>
            <input type="text" value={fullName}
                onChange={(e)=>{
                  setFullName(e.target.value)
                }} id="full_name" name="full_name" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
       
        <div class="mb-4">
            <label for="student_id" class="block text-gray-700 font-bold mb-2">Student ID:</label>
            <input type="text" value={stdId}
                onChange={(e)=>{
                  setStdID(e.target.value)
                }} id="student_id" name="student_id" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        
        <div class="mb-4">
            <label for="dob" class="block text-gray-700 font-bold mb-2">Date of Birth:</label>
            <input type="date" value={stdDob}
                onChange={(e)=>{
                  setStdDob(e.target.value)
                }} id="dob" name="dob" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        
        <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email Address:</label>
            <input type="email" value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }} id="email" name="email" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required/>
        </div>
        
        <div class="mb-4">
            <label for="phone" class="block text-gray-700 font-bold mb-2">Phone Number:</label>
            <input type="tel" value={stdMob}
                onChange={(e)=>{
                  setStdMob(e.target.value)
                }} id="phone" name="phone" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        
        <div class="mb-4">
            <label for="stream" class="block text-gray-700 font-bold mb-2">Stream of Studying:</label>
            <input type="text" value={stdStreamStudy}
                onChange={(e)=>{
                  setStdStreamStudy(e.target.value)
                }} id="stream" name="stream" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>

        <div class="mb-4">
            <label for="year" class="block text-gray-700 font-bold mb-2">Year of Studying:</label>
            <input type="text" value={stdYear}
                onChange={(e)=>{
                  setStdYear(e.target.value)
                }} id="year" name="year" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        <div class="mb-4">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
            <input type="password" value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }} id="password" name="password" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        <div class="mb-4">
            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Registration</button>
        </div>
    </form>
</div>
<br />
      <Footer/>

    </>
  )
}

export default VoterRegistrationForm
