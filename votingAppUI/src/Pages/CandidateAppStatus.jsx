import React from 'react'
// import NavBarCommon from '../components/NavBarCommon'
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'
import OfficialNavBar from '../components/OfficialNavBar'
import { useState, useEffect } from 'react'

const CandidateAppStatus = () => {
  const [showData, setShowData] = useState(false);
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('/api/candidate/isApproved');
        const result = await response.json();
        setShowData(result.isApproved);
        // console.log("showData",showData);
        setData(result.isApproved);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data
    fetchData();
  }, []); 
  return (
    <>
     <OfficialNavBar/>
      <CandidateNavBar/>
    <br /><br />
    <table class="min-w-[60%] bg-white border border-gray-300 shadow-md rounded-lg m-auto">
    <thead class="bg-[#409D9B] text-white rounded-t-lg">
        <tr>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Approval Detail</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Approval Status</td>
            {showData ? 
                <td class="px-6 py-4 border-b border-gray-300 text-white bg-green-500">Approved</td> 
                : 
                <td class="px-6 py-4 border-b border-gray-300 text-white bg-red-500">Not Approved</td>
            }
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
