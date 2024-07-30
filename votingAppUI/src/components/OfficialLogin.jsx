import React from 'react'
import OfficialImage from '../assets/img/undraw_co-working_re_w93t.svg'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const OfficialLogin = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const checkLogin = async (loginCreds)=>{
        const res = await fetch('/api/official/loginChecker',{
            method:'POST',
            headers:{  
                'Content-Type':'application/json',
            },
            body : JSON.stringify(loginCreds)
          })
          if(res.ok){
            toast.success('Logged In')
            return navigate('/officialsHome')
          }
          else{
            toast.error('Invalid Credentials')
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

<div className="flex justify-center font-[500] text-[30px] text-[#2866AB] font-[600] ">OFFICIAL LOGIN</div>

<div className="grid grid-cols-2 gap-2 content-center bg-[#DFEFF0] rounded-md w-[70%] m-auto">
    <div className="grid grid-row-3  mt-8 mr-10 justify-items-center p-5 rounded-md h-[250px] m-auto">
    <form onSubmit={setLoginFormData}>
            <div>
                <label htmlFor="uname" className="text-[18px] font-[500]">Login</label> <br/>
                <input id="uname" name="uname" className="outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md" type="text" placeholder="Enter your username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
            </div>
            <div>
                <input id="password" name="password" className="outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md" type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            <div className="mt-2">
               
                <button type="submit" className="bg-[#2866AB] px-[115px] outline outline-1 outline-[#2866AB] mt-2 mb-2 py-1 px-3 rounded-md text-white hover:bg-[#2F64A3]">Login</button>
            </div>
        </form>
    </div>

    <div className="m-5">
        <img className="w-[300px]" src={OfficialImage} alt=""/>
    </div>
    {/* <!-- Login section ends here --> */}
    
</div>
</div>

    </>
  )
}

export default OfficialLogin
