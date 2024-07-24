import React, { useEffect, useState } from 'react';
// import NavBarCommon from '../components/NavBarCommon'
import VoterNavBar from '../components/VoterNavBar'
import VoterNavBar2 from '../components/VoterNavBar2'
import Footer from '../components/Footer'

const VoterHome = () => {
    const [voterData, setVoterData] = useState(null);

  useEffect(() => {
    const fetchVoterData = async () => {
      try {
        // const token = localStorage.getItem('token'); 
        const response = await fetch('/api/voter-details', {
          method: 'GET',
          headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setVoterData(data);
      } catch (error) {
        console.error('Error fetching voter data', error);
      }
    };

    fetchVoterData();
  }, []);
if (!voterData) {
    
    return <div><VoterNavBar />
      <VoterNavBar2 />Loading...</div>;
  }

  return (
    <>
      <VoterNavBar />
      <VoterNavBar2 />
      <div>
        <h1 className="text-left ml-[15%] mt-[-10px] text-[20px]">
          Welcome back, <span className="font-black text-[20px]">{voterData.fullName}!</span>
        </h1>
      </div>
      <div>
        <table className="min-w-[70%] bg-white border border-gray-300 m-auto mt-1">
          <thead className="bg-[#409D9B] text-white">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Profile Detail</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Full Name</td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voterData.fullName}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Student ID</td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voterData.stdId}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Email Address</td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voterData.email}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Phone Number</td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voterData.stdMob}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Stream of Studying</td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voterData.stdStreamStudy}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Year of Studying</td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voterData.stdYear}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br /><br />
      <br />
      <Footer />
    </>
  );
}

export default VoterHome
