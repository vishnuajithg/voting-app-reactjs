import React from 'react'
import OfficialNavBar from '../components/OfficialNavBar'
import OfficialNavBar2 from '../components/OfficialNavBar2'
import Footer from '../components/Footer'

const ViewCandidates = () => {
  return (
    <>
    <OfficialNavBar/>
    <OfficialNavBar2/>
      <div>
    <div class="max-w-full overflow-x-auto">
        <table class="min-w-[70%] bg-white border border-gray-300 m-auto">
            <thead class="bg-blue-500 text-white">
                <tr>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Candidate Detail</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-50">
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Name</td>
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">John Doe</td>
                    <td class="px-6 py-4 border-b border-gray-300">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Approve</button>
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reject</button>
                    </td>
                </tr>
                <tr class="bg-white">
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Stream of Studying</td>
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Computer Science</td>
                    <td rowspan="6" class="px-6 py-4 border-b border-gray-300">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-16 text-center rounded focus:outline-none focus:shadow-outline">Next</button>
                    </td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Year of Studying</td>
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">3rd Year</td>
                </tr>
                <tr class="bg-white">
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Age</td>
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">25</td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Symbol</td>
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">🗳️</td>
                </tr>
                <tr class="bg-white">
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Date of Birth</td>
                    <td class="px-6 py-4 border-b border-gray-300 text-gray-700">01/01/1999</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<br /><br />
<br />
<br />
<Footer/>
    </>
  )
}

export default ViewCandidates
