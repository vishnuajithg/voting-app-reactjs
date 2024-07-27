import React from 'react'
import VoterNavBar from '../components/VoterNavBar'
import VoterNavBar2 from '../components/VoterNavBar2'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const VoteCast = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch('/api/voter/getApprovedCandidates');
                const data = await response.json();
                // console.log(data.candidates[0].name);
                // setCandidates(Object.values(result.candidates))
                setCandidates(data.candidates)
                console.log(candidates)
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchCandidates()
    });
    // console.log(typeof(candidates))
    
    return (
    <>
    <VoterNavBar/>
    <VoterNavBar2/>
    <br />    <br />
    <div class="bg-white p-10 rounded-lg shadow-2xl w-full max-w-xl m-auto">
        <h1 class="text-3xl font-extrabold text-[#172B4D] mb-6 text-center">Cast Your Vote</h1>
        
            <select
                class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-white border border-gray-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-gray-500 mt-1 text-sm font-sans"
                defaultValue=""><option value="" disabled>Select the candidate</option>
                {candidates.map((candidate) => (
                    <option key={candidate._id} value={candidate._id}>{candidate.name}</option>
                ))}
            </select>
            <br />
            <button type="submit" class="w-full bg-[#409D9B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition duration-300">Submit Vote</button>
        
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Footer/>
    </>
  )
}

export default VoteCast
