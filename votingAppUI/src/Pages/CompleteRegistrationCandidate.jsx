import React from 'react'
// import NavBarCommon from '../components/NavBarCommon'
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'
import OfficialNavBar from '../components/OfficialNavBar'
import { useNavigate } from 'react-router-dom'
import NavBarCommon from '../components/NavBarCommon'
import { useState } from 'react'


const CompleteRegistrationCandidate = () => {
    const [stream, setStream] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState('');
    const [symbol, setSymbol] = useState('');
    const [dob, setDob] = useState('');
  
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const candidateDetails = {stream, year, age, symbol, dob };
  
      try {
        const res = await fetch('/api/candidate/completeRegistrationCandidate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(candidateDetails),
        });
  
        if (res.ok) {
          alert('Details updated successfully');
          navigate('/forCandidates');
        } else {
          alert('Error updating details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <>
        <OfficialNavBar />
        <CandidateNavBar />
        <div className="flex items-center justify-center">
          <div className="w-[70%] m-auto items-center">
            <h1 className="text-2xl font-bold mb-6 text-center">College Election Candidate Registration</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="stream" className="block text-gray-700 font-bold mb-2">Stream of Studying:</label>
                <input
                  type="text"
                  id="stream"
                  value={stream}
                  onChange={(e) => setStream(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year of Studying:</label>
                <input
                  type="text"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="symbol" className="block text-gray-700 font-bold mb-2">Symbol:</label>
                <input
                  type="text"
                  id="symbol"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <button type="submit" className="w-full bg-[#409D9B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Registration</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default CompleteRegistrationCandidate
