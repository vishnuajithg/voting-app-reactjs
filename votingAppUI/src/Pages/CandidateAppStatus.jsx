import React from 'react'
// import NavBarCommon from '../components/NavBarCommon'
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'
import OfficialNavBar from '../components/OfficialNavBar'

const CandidateAppStatus = () => {
  return (
    <>
     <OfficialNavBar/>
      <CandidateNavBar/>
    <br /><br />
      <table class="min-w-[70%] bg-white border border-gray-300 m-auto">
    <thead class="bg-[#409D9B] text-white">
        <tr>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Approval Detail</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Approval Status</td>
            {/* <!-- <td class="px-6 py-4 border-b border-gray-300 text-white bg-red-500">Not Approved</td> --> */}
            <td class="px-6 py-4 border-b border-gray-300 text-white bg-orange-500">Pending...</td> 
        </tr>
    </tbody>
</table>
<br />
<br /><br /><br /><br />
<br /><br /><br /><br />
<br /><br /><br /><br /><br /><br />

      <Footer/>
    </>
  )
}

export default CandidateAppStatus
