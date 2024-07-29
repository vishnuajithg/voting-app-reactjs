import React, { useEffect, useState } from 'react';
import OfficialNavBar from '../components/OfficialNavBar';
import OfficialNavBar2 from '../components/OfficialNavBar2';
import Footer from '../components/Footer';

const ViewCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [approvedIndex, setApprovedIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState(0);

  const fetchCandidates = async () => {
    try {
      const response = await fetch('/api/official/getAllCandidates');
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleNextApproved = () => {
    setApprovedIndex((prevIndex) => (prevIndex + 1) % approvedCandidates.length);
  };

  const handleNextPending = () => {
    setPendingIndex((prevIndex) => (prevIndex + 1) % pendingCandidates.length);
  };

  const handleApprove = async (candidateId) => {
    try {
      const response = await fetch(`/api/official/approveCandidate/${candidateId}`, {
        method: 'POST',
      });

      if (response.ok) {
        alert('Candidate approved successfully');
        fetchCandidates();
      } else {
        alert('Error approving candidate');
      }
    } catch (error) {
      console.error('Error approving candidate:', error);
    }
  };

  const handleReject = async (candidateId) => {
    try {
      const response = await fetch(`/api/official/rejectCandidate/${candidateId}`, {
        method: 'POST',
      });

      if (response.ok) {
        alert('Candidate rejected successfully');
        fetchCandidates();
      } else {
        alert('Error rejecting candidate');
      }
    } catch (error) {
      console.error('Error rejecting candidate:', error);
    }
  };

  const approvedCandidates = candidates.filter(candidate => candidate.isApproved);
  const pendingCandidates = candidates.filter(candidate => !candidate.isApproved);

  const renderCandidateDetails = (candidate, handleNext, showApproveButton) => (
    <React.Fragment key={candidate._id}>
     <tr className="bg-gray-50 hover:bg-gray-100">
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Name</td>
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidate.name}</td>
  <td className="px-6 py-4 border-b border-gray-300 text-center">
    {showApproveButton && (
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        onClick={() => handleApprove(candidate._id)}
      >
        Approve
      </button>
    )}
    <button
      onClick={() => handleReject(candidate._id)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Reject
    </button>
  </td>
</tr>
<tr className="bg-white hover:bg-gray-50">
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Stream of Studying</td>
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidate.stream}</td>
  <td rowSpan="6" className="px-6 py-4 border-b border-gray-300 text-center">
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
      onClick={handleNext}
    >
      View Next Candidate
    </button>
  </td>
</tr>
<tr className="bg-gray-50 hover:bg-gray-100">
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Year of Studying</td>
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidate.year}</td>
</tr>
<tr className="bg-white hover:bg-gray-50">
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Age</td>
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidate.age}</td>
</tr>
<tr className="bg-gray-50 hover:bg-gray-100">
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Symbol</td>
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{candidate.symbol}</td>
</tr>
<tr className="bg-white hover:bg-gray-50">
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Date of Birth</td>
  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
    {new Date(candidate.dob).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}
  </td>
</tr>

    </React.Fragment>
  );
  // #409D9B

  return (
    <>
      <OfficialNavBar />
      <OfficialNavBar2 />
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold my-4 text-center">Approved Candidates</h2>
        {approvedCandidates.length > 0 ? (
          <div className="max-w-full overflow-x-auto mb-8">
           <table className="min-w-[70%] bg-white border border-gray-300 shadow-md rounded-lg m-auto overflow-hidden">
  <thead className="bg-green-500 text-white">
    <tr>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Candidate Detail</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
    </tr>
  </thead>
  <tbody>
    {approvedCandidates[approvedIndex] && renderCandidateDetails(approvedCandidates[approvedIndex], handleNextApproved, false)}
  </tbody>
</table>

          </div>
        ) : (
          <p>No approved candidates</p>
        )}

        <h2 className="text-2xl font-bold my-4  text-center text-center">Pending Candidates</h2>
        {pendingCandidates.length > 0 ? (
          <div className="max-w-full overflow-x-auto">
            <table className="min-w-[70%] bg-white border border-gray-300 m-auto">
              <thead className="bg-red-500 text-white">
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Candidate Detail</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingCandidates[pendingIndex] && renderCandidateDetails(pendingCandidates[pendingIndex], handleNextPending, true)}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No pending candidates</p>
        )}
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default ViewCandidates;
