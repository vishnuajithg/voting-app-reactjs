import React, { useEffect, useState } from 'react';
import OfficialNavBar from '../components/OfficialNavBar';
import OfficialNavBar2 from '../components/OfficialNavBar2';
import Footer from '../components/Footer';

const ViewCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('/api/official/getAllCandidates'); 
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };

  const handleApprove = async (candidateId) => {
    try {
      const response = await fetch(`/api/approve_candidate/${candidateId}`, {
        method: 'POST'
      });

      if (response.ok) {
        alert('Candidate approved successfully');
        setCandidates((prevCandidates) =>
          prevCandidates.map(candidate =>
            candidate._id === candidateId ? { ...candidate, isApproved: true } : candidate
          )
        );
      } else {
        alert('Error approving candidate');
      }
    } catch (error) {
      console.error('Error approving candidate:', error);
    }
  };

  return (
    <>
      <OfficialNavBar />
      <OfficialNavBar2 />
      <div>
        {candidates.length > 0 && (
          <div className="max-w-full overflow-x-auto">
            <table className="min-w-[70%] bg-white border border-gray-300 m-auto">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Candidate Detail</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                <React.Fragment key={candidates[currentIndex]._id}>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Name</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidates[currentIndex].name}</td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        onClick={() => handleApprove(candidates[currentIndex]._id)}
                      >
                        Approve
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reject</button>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Stream of Studying</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidates[currentIndex].stream}</td>
                    <td rowSpan="6" className="px-6 py-4 border-b border-gray-300">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-16 text-center rounded focus:outline-none focus:shadow-outline"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Year of Studying</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidates[currentIndex].year}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Age</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidates[currentIndex].age}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Symbol</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidates[currentIndex].symbol}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Date of Birth</td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidates[currentIndex].dob}</td>
                  </tr>
                </React.Fragment>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <br /><br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default ViewCandidates;
