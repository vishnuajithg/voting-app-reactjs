import React from "react";
import NavBarCommon from "../components/NavBarCommon";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CandidateRegistrationForm = () => {
  
  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [dob,setDob] = useState('')
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')

  const candRegFormSubmit = async (candRegData)=>{
    console.log(candRegData)
    const res = await fetch('http://localhost:5000/candidateRegistrationForm',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(candRegData)
    })
    if(res.ok){
      alert('Registration Complete')
      return navigate('/forCandidates')
      // resend('posted')
  }
  else{
      alert('Error')
      return navigate('/candidateRegistrationForm')
      // res.send(500)

  }
  }

  const getCandRegForm = (e)=>{
    e.preventDefault();
    const candRegData = {
      name, dob, username, pwd
    }
    candRegFormSubmit(candRegData)
  }
  return (
    <>
      <NavBarCommon />
      <br />
      <br />
      <br />
      <div class="flex items-center justify-center">
        <div class="w-[70%] m-auto items-center">
          <h1 class="text-2xl font-bold mb-6 text-center">
            Election Candidate Registration
          </h1>
          <form onSubmit={getCandRegForm} action="">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Enter Your Name:
              </label>
              <input
                type="text"
                id="stream"
                name="stream"
                value={name}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div class="mb-4">
              <label for="dob" class="block text-gray-700 font-bold mb-2">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={dob}
                onChange={(e)=>{setDob(e.target.value)}}
                class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div class="mb-4">
              <label for="year" class="block text-gray-700 font-bold mb-2">
                Enter any username:
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div class="mb-4">
              <label for="age" class="block text-gray-700 font-bold mb-2">
                Enter any password:
              </label>
              <input
                type="password"
                id="age"
                name="age"
                value={pwd}
                onChange={(e)=>{setPwd(e.target.value)}}
                class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div class="mb-4">
              <a href="forCandidates.html">
                <button
                  type="submit"
                  class="w-full bg-[#409D9B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded    "
                >
                  Submit Registration
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default CandidateRegistrationForm;
