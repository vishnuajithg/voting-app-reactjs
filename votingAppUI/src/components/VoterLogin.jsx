import React from 'react'
import VoterImage from '../assets/img/undraw_voting_nvu7.svg'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";

const VoterLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkLogin = async (loginCreds)=>{
        const res = await fetch('http://localhost:5000/voterLoginChecker',{
            method:'POST',
            headers:{  
                'Content-Type':'application/json',
            },
            body : JSON.stringify(loginCreds)
          })
          if(res.ok){
            alert('Logined')
            return navigate('/VoterHome')
          }
        }

   const setLoginFormData = (e) =>{
    e.preventDefault();
    const loginCreds = {
        email, password
    } 
    checkLogin(loginCreds)
   }
  return (
    <>
<div className="bg-[#F4F5F7] text-red-700">

<div className="flex justify-center font-[500] text-[30px] text-[#2866AB] font-[600] ">VOTERS LOGIN</div>

<div className="grid grid-cols-2 gap-2 content-center bg-[#DFEFF0] rounded-md w-[70%] m-auto">
    <div className="grid grid-row-3  mt-8 mr-10 justify-items-center p-5 rounded-md h-[250px] m-auto">
        <form onSubmit={setLoginFormData} >
            <div>
                <label htmlFor="" className="text-[18px] font-[500]">Login</label> <br/>
                <input className="outline   outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter your email" required/>
            </div>
            <div>
                {/* <!-- <label  for="">Password</label> --> */}
                <input className="outline   outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md" value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Enter your password" required/>
            </div>
            <div className="mt-2 ">
                <button className="bg-[#2866AB] px-[115px]  outline   outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3  rounded-md text-white hover:bg-[#2F64A3]">Login</button>
            </div>
        </form>
        <div className="border-t border-[black]">
            
            <p className="mt-2 "><span>Not Registered Yet?</span><a className="bg-[#65D269] m-2 outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3  rounded-md text-[#172B4D] hover:bg-[#4EF037]" href="/voterRegistrationForm">Sign Up</a><span>here</span></p>
        </div>
    </div>

    <div className="m-5">
        <img src={VoterImage} alt=""/>
    </div>
    {/* <!-- Login section ends here --> */}
    
</div>
</div>

    </>
  )
}

export default VoterLogin
