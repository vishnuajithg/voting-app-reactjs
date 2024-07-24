import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'
// import NavBarCommon from '../components/NavBarCommon'
import OfficialNavBar from '../components/OfficialNavBar'

const CandidateHome = () => {
    
    const { username } = useParams();

    useEffect(() => {
      // Fetch user details using the username
      const fetchUserDetails = async () => {
        const res = await fetch(`http://localhost:5000/candidateHome/${username}`);
        const data = await res.json();
        // Do something with the user details
        console.log(res.json())
      };
  
      fetchUserDetails();
    }, [username]);
  return (
    <>
        <OfficialNavBar/>
        <CandidateNavBar />
        
        <div>
    <h1 class="text-left ml-[15%] mt-[-10px] text-[20px]">Welcome back,<span class="font-black text-[20px]"> Candidate!</span>  </h1>
</div>

<table class="min-w-[70%] bg-white border border-gray-300 m-auto">
    <thead class="bg-[#409D9B] text-white">
        <tr>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Detail</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-gray-50">
            <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Name</td>
            <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Candidate Name</td>
        </tr>
        <tr class="bg-white">
            <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Date of Birth</td>
            <td class="px-6 py-4 border-b border-gray-300 text-gray-700">1995-08-24</td>
        </tr>
    </tbody>
</table>
<br />
        <Footer />
    </>
  )
}

export default CandidateHome
