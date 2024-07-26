import React from 'react'
// import NavBarCommon from '../components/NavBarCommon'
import VoterNavBar from '../components/VoterNavBar'
import VoterNavBar2 from '../components/VoterNavBar2'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const VoterAppStatus = () => {
  const [showData, setShowData] = useState(false);
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('/api/voter/isApproved');
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
    <VoterNavBar/>
    <VoterNavBar2/>
    <br />
      <div>
    <table className="min-w-[70%] bg-white border border-gray-300 m-auto">
        <thead className="bg-[#409D9B] text-white">
            <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Approval Detail</th>
              
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Approval Status</td>
                {showData ? <td className="px-6 py-4 border-b border-gray-300 text-white bg-green-500">Approved</td> 
                :
                <td className="px-6 py-4 border-b border-gray-300 text-white bg-red-500">Not Approved</td>
                
              }
               
                
            </tr>
        </tbody>
    </table>
</div>
<br />
<br /><br />
<br />
<br />
<br /><br />
<br />
<br />
<br /><br />
<br /><br />
<br /><br />
<br />
<Footer/>
    </>
  )
}

export default VoterAppStatus
