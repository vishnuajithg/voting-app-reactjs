import React, { useEffect, useState } from 'react';
import OfficialNavBar from '../components/OfficialNavBar';
import Footer from '../components/Footer';
import OfficialNavBar2 from '../components/OfficialNavBar2';

const OfficialsHome = () => {
  const [stats, setStats] = useState({
    votersApproved: 0,
    votersRejected: 0,
    candidatesApproved: 0,
    candidatesRejected: 0,
    currentElectionStatus: 'No active election',
    
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/official/stat');
        const data = await response.json();
        setStats(data);
        const res = await fetch('/api/official/viewResult');
        const resultCan = await res.json();
        setResults(resultCan);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <OfficialNavBar />
      <OfficialNavBar2 />
      <div className="max-w-[85%] grid grid-cols-1 md:grid-cols-3 gap-4 m-auto">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <a href="/viewVoters" className="block"><h3 className="text-lg font-semibold mb-2">Voters Approved</h3></a>
          <a href="/viewVoters" className="block"><p className="text-3xl font-bold">{stats.votersApproved}</p></a>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <a href="/viewVoters" className="block"><h3 className="text-lg font-semibold mb-2">Voters Rejected</h3></a>
          <a href="/viewVoters" className="block"><p className="text-3xl font-bold">{stats.votersRejected}</p></a>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <a href="/viewCandidates" className="block"><h3 className="text-lg font-semibold mb-2">Candidates Approved</h3></a>
          <a href="/viewCandidates" className="block"><p className="text-3xl font-bold">{stats.candidatesApproved}</p></a>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <a href="/viewCandidates" className="block"><h3 className="text-lg font-semibold mb-2">Candidates Rejected</h3></a>
          <a href="/viewCandidates" className="block"><p className="text-3xl font-bold">{stats.candidatesRejected}</p></a>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md col-span-3 md:col-span-1">
          <a href="#" className="block"><h3 className="text-lg font-semibold mb-2">Progress of Election</h3></a>
          <a href="#" className="block"><p className="text-lg font-semibold"></p></a>
          <div className="w-full bg-gray-300 mt-2 rounded-full">
            <div className="bg-green-500 text-xs leading-none py-1 text-center text-white rounded-full w-[50%]">50%</div>
          </div>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md col-span-3 md:col-span-1">
          <a href="/electionStartsStops" className="block"><h3 className="text-lg font-semibold mb-2">Current Election</h3></a>
          <a href="/electionStartsStops" className="block"><p className="text-3xl font-bold">{stats.currentElectionStatus}</p></a>
        </div>
      </div>
      <div className="max-w-[70%] mt-8 p-4 bg-white border border-gray-300 rounded-lg shadow-md m-auto">
        <h3 className="text-lg font-semibold mb-4">Result Viewer</h3>
        {results.map((result) => (
          <div key={result._id} className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
            <a href="#" className="block"><p className="text-lg font-semibold">{result._id}</p></a>
            <a href="#" className="block"><p className="text-xl font-bold text-green-500">{result.count}</p></a>
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </>
  );
};

export default OfficialsHome;
