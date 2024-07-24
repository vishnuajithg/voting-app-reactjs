import React from 'react'
import VoterNavBar from '../components/VoterNavBar'
import VoterNavBar2 from '../components/VoterNavBar2'
import Footer from '../components/Footer'

const VoteCast = () => {
  return (
    <>
    <VoterNavBar/>
    <VoterNavBar2/>
    <br />    <br />
    <div class="bg-white p-10 rounded-lg shadow-2xl w-full max-w-xl m-auto">
        <h1 class="text-3xl font-extrabold text-[#172B4D] mb-6 text-center">Cast Your Vote</h1>
        <form id="voteForm" action="/api/vote" method="POST" class="space-y-6">
            {/* <div class="mb-4">
                <label for="voterId" class="block text-gray-700 font-semibold mb-2">Your Voter ID</label>
                <input type="text" id="voterId" name="voterId" class="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200" required />
            </div> */}
            <div class="mb-4">
                <label for="candidateId" class="block text-gray-700 font-semibold mb-2">Select Candidate</label>
                <select id="candidateId" name="candidateId" class="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200" required>
                    <option value="" disabled selected>Select Your Candidate</option>
                    <option value="1">Candidate 1</option>
                    <option value="2">Candidate 2</option>
                    <option value="3">Candidate 3</option>
                    {/* <!-- Add more candidates as needed --> */}
                </select>
            </div>
            <button type="submit" class="w-full bg-[#409D9B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition duration-300">Submit Vote</button>
        </form>
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
