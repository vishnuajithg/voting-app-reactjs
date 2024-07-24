import React from 'react'
import NavBarCommon from '../components/NavBarCommon'
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'

const CompleteRegistrationCandidate = () => {
  return (
    <>
      <NavBarCommon/>
      <CandidateNavBar/>
      <div class="flex items-center justify-center">
<div class="w-[70%] m-auto items-center">
    <h1 class="text-2xl font-bold mb-6 text-center">College Election Candidate Registration</h1>
        <form action="/submit_candidate_registration" method="POST" enctype="multipart/form-data">
    
            <div class="mb-4">
                <label for="stream" class="block text-gray-700 font-bold mb-2">Stream of Studying:</label>
                <input type="text" id="stream" name="stream" class="  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>
            
            <div class="mb-4">
                <label for="year" class="block text-gray-700 font-bold mb-2">Year of Studying:</label>
                <input type="text" id="year" name="year" class="  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>
        
            <div class="mb-4">
                <label for="age" class="block text-gray-700 font-bold mb-2">Age:</label>
                <input type="number" id="age" name="age" class="  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>

            <div class="mb-4">
                <label for="symbol" class="block text-gray-700 font-bold mb-2">Symbol:</label>
                <input type="text" id="symbol" name="symbol" class="  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>
        
            <div class="mb-4">
                <label for="dob" class="block text-gray-700 font-bold mb-2">Date of Birth:</label>
                <input type="date" id="dob" name="dob" class="  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>
            
            <div class="mb-4">
                <button type="submit" class="w-full  bg-[#409D9B]  hover: bg-green-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Registration</button>
       </div>
       </form>
       </div>
</div>
<Footer/>
    </>
  )
}

export default CompleteRegistrationCandidate
