import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'
import CandidateNavBar2 from '../components/CandidateNavBar2'

const CandidateHome = () => {
    
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');

    useEffect(() => {
      // Fetch user details using the username
      const fetchUserDetails = async () => {
        const res = await fetch(`/api/candidate/candidateHome`);
        const data = await res.json();
        // Do something with the user details
        console.log(data)
        setName(data.name);
        setDob(new Date(data.dob).toISOString().split('T')[0]);
      };
  
      fetchUserDetails();
    //   setName(data);
    //   setDob(new Date(data.dob).toISOString().split('T')[0]);
    }, []);
    
    
  return (
    <>
        <CandidateNavBar2/>
        <CandidateNavBar />
        
        <div>
    <h1 className="text-left ml-[15%] mt-[-10px] text-[20px]">Welcome back,<span className="font-black text-[20px]"> {name}</span>  </h1>
</div>

<table className="min-w-[70%] bg-white border border-gray-300 m-auto">
    <thead className="bg-[#409D9B] text-white">
        <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Detail</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
        </tr>
    </thead>
    <tbody>
        <tr className="bg-gray-50">
            <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Name</td>
            <td className="px-6 py-4 border-b border-gray-300 text-gray-700 ">{name}</td>
        </tr>
        <tr className="bg-white">
            <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Date of Birth</td>
            <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{new Date(dob).toLocaleDateString('en-GB')}</td>
        </tr>
    </tbody>
</table>
<br />
        <Footer />
    </>
  )
}

export default CandidateHome
