import React from 'react'
import OfficialNavBar from '../components/OfficialNavBar'
import OfficialNavBar2 from '../components/OfficialNavBar2'
import Footer from '../components/Footer'

const ViewVoters = () => {
  return (
    <>
    <OfficialNavBar/>
    <OfficialNavBar2/>
      <div>
    <table class="min-w-[70%] bg-white border border-gray-300 m-auto">
        <thead class="bg-[#409D9B] text-white">
            <tr>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Voter Name</th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Student ID</th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Year of Study</th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-50">
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">User one</td>
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">4984998498</td>
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">user.testone@gmail.com</td>
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">3rd Year</td>
                <td class="px-6 py-4 border-b border-gray-300">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Approve</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reject</button>
                </td>
            </tr>
            <tr class="bg-white">
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">User Two</td>
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">4899819818</td>
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">user.testtwo@gmail.com</td>
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">2nd Year</td>
                <td class="px-6 py-4 border-b border-gray-300">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Approve</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reject</button>
                </td>
            </tr>
        </tbody>
    </table>
    
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br /><br />
<br />
<br />
<br /><br />
<Footer/>
    </>
  )
}

export default ViewVoters
