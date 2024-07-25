import React from 'react'
import Footer from '../components/Footer'
import NavBarCommon from '../components/NavBarCommon'
import CandidateNavBar from '../components/CandidateNavBar'
import OfficialNavBar from '../components/OfficialNavBar'

const CandidateProposal = () => {
  return (
    <>
     <OfficialNavBar/>
    <CandidateNavBar/>
    <br />
        <form action="/upload_video" method="POST" enctype="multipart/form-data" class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <div class="mb-4">
        <label for="video_title" class="block text-gray-700 font-bold mb-2">Video Title:</label>
        <input type="text" id="video_title" name="video_title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
    </div>
    <div class="mb-4">
        <label for="video_description" class="block text-gray-700 font-bold mb-2">Video Description:</label>
        <textarea id="video_description" name="video_description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required></textarea>
    </div>
    <div class="mb-4">
        <label for="video_file" class="block text-gray-700 font-bold mb-2">Upload Video:</label>
        <input type="file" id="video_file" name="video_file" accept="video/*" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
    </div>
    <div class="mb-4">
        <button type="submit" class="w-full  bg-[#409D9B]  hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Upload Video</button>
    </div>
</form>
<br /><br />
      <Footer/>
    </>
  )
}

export default CandidateProposal
