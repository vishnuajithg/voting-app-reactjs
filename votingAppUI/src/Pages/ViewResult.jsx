import React, { useState, useEffect } from 'react';

const ViewResult = () => {
  const [candidateCounts, setCandidateCounts] = useState([]);

  useEffect(() => {
    const fetchCandidateCounts = async () => {
      try {
        const response = await fetch('/api/official/viewResult');
        const data = await response.json();
        setCandidateCounts(data);
      } catch (error) {
        console.error('Error fetching candidate counts:', error);
      }
    };

    fetchCandidateCounts();
  }, []);

  return (
    <>
    <br /><br />
    <div className="flex items-center justify-center">
      <table className="min-w-[70%] bg-white border border-gray-300 m-auto">
        <thead className="bg-[#409D9B] text-white">
          <tr>
            <th className="px-6 py-4 border-b border-gray-300 text-gray-700">Candidate Name</th>
            <th className="px-6 py-4 border-b border-gray-300 text-gray-700">Count</th>
          </tr>
        </thead>
        <tbody>
          {candidateCounts.map((candidate) => (
            <tr key={candidate._id}>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidate._id}</td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidate.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <br />
    <br /><br /><br />
    <br /><br /><br /><br /><br />
    </>
  );
};

export default ViewResult;