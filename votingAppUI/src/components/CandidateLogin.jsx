import React from 'react'
import CandidateImage from '../assets/img/undraw_candidate_ubwv.svg'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";

const CandidateLogin = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const checkLogin = async (loginCreds)=>{
        const res = await fetch('/api/candidate/loginChecker',{
            method:'POST',
            headers:{  
                'Content-Type':'application/json',
            },
            body : JSON.stringify(loginCreds)
          })
          if(res.ok){
            alert('Logged In')
            return navigate(`/CandidateHome/`)
          }
        }

   const setLoginFormData = (e) =>{
    e.preventDefault();
    const loginCreds = {
        username, password
    } 
    checkLogin(loginCreds)
   }

  return (
    <>
      <div className="bg-[#F4F5F7] text-red-700">
</div>

<div className="flex justify-center font-[500] text-[30px] text-[#2866AB] mt-10 font-[600] ">CANDIDATE LOGIN</div>

<div className="grid grid-cols-2 gap-2 content-center bg-[#DFEFF0] rounded-md w-[70%] m-auto">
    <div className="grid grid-row-3  mt-8 mr-10 justify-items-center place-content-center p-5 rounded-md h-[250px] m-auto">
        <form onSubmit={setLoginFormData}>
            <div>
                <label htmlFor="uname" className="text-[18px] font-[500]">Login</label> <br/>
                <input id="uname" name="uname" className="outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md" type="text" placeholder="Enter your username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
            </div>
            <div>
                <input id="pwd" name="pwd" className="outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md" type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            <div className="mt-2">
               
                <button type="submit" className="bg-[#2866AB] px-[115px] outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md text-white hover:bg-[#2F64A3]">Login</button>
            </div>
        </form>
        <div className="border-t border-[black]">
            <p className="mt-2"><span>Not Registered Yet?</span><a className="bg-[#65D269] m-2 outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md text-[#172B4D] hover:bg-[#4EF037]" href="/candidateRegistrationForm">Sign Up</a><span>here</span></p>
        </div>
    </div>
    <div className="m-5">
        <img src={CandidateImage} alt="image goes here" />
    </div>
</div>
    </>
  )
}

export default CandidateLogin
