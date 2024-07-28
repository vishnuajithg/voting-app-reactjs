import React from 'react'
import OfficialNavBar from '../components/OfficialNavBar'
import OfficialNavBar2 from '../components/OfficialNavBar2'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'


const ViewVoters = () => {

    const [voters, setVoters] = useState([]);

    const handleReject = async (voterId) => {
        try {
            const response = await fetch(`/api/official/rejectVoter/${voterId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Fetch updated voters list
                fetchVoters();
            } else {
                console.error('Failed to reject voter');
            }
        } catch (error) {
            console.error('Error during rejection:', error);
        }
    }
    const handleApproval = async (voterId) => {
        try {
            const response = await fetch(`/api/official/approveVoter/${voterId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Fetch updated voters list
                fetchVoters();
            } else {
                console.error('Failed to approve voter');
            }
        } catch (error) {
            console.error('Error during approval:', error);
        }
    };


    useEffect(() => {
        const fetchVoters = async (req,res) => {
            try {
                const res = await fetch('/api/official/getAllVoters');
                console.log(res)
                const voters = await res.json();
                setVoters(voters);
            } catch (error) {
                console.error('Error fetching voters:', error);
            }
        };

        fetchVoters();
    }, []);

  return (
    <>
    <OfficialNavBar/>
    <OfficialNavBar2/>
      <div>
      <table className="min-w-[70%] bg-white border border-gray-300 m-auto">
                    <thead className="bg-[#409D9B] text-white">
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Voter Name</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Student ID</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Year of Study</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voters.map((voter) => (
                            <tr key={voter._id} className="bg-gray-50">
                                <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voter.fullName}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voter.studentId}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voter.email}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{voter.year}</td>
                                <td className="px-6 py-4 border-b border-gray-300">
                                    <button onClick={handleApproval} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Approve</button>
                                    <button onClick={handleReject} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reject</button>
                                </td>
                            </tr>
                        ))}
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
