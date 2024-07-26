import React from 'react'
// import NavBarCommon from '../components/NavBarCommon'
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'
import OfficialNavBar from '../components/OfficialNavBar'
import { useNavigate } from 'react-router-dom'
// import NavBarCommon from '../components/NavBarCommon'
import { useState, useEffect } from 'react'


const CompleteRegistrationCandidate = () => {
    const [stream, setStream] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState('');
    const [symbol, setSymbol] = useState('');
    const [dob, setDob] = useState('');
    const [showData, setShowData] = useState(false);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        try {
  
          const response = await fetch('/api/candidate/isRegistered');
          const result = await response.json();
          setShowData(result.isRegistered);
          // console.log("showData",showData);
          setData(result.candidate);
          
          console.log("data",result.candidate.name);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the function to fetch data
      fetchData();
    }, []); 
  
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
          navigate('/completeRegistrationCandidate');
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
              {/* {starts here} */}
              <h1 className="text-2xl font-bold mb-6 text-center">You Have Completed the Registration</h1>
             
              {showData ? <>
              {data && (
               <table className="min-w-[70%] bg-white border border-gray-300 m-auto">
               <thead className="bg-[#409D9B] text-white">
                 <tr>
                   <th className="px-6 py-4 border-b border-gray-300 text-left">Field</th>
                   <th className="px-6 py-4 border-b border-gray-300 text-left">Value</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Symbol</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.symbol}</td>
                 </tr>
                 <tr>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Year</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.year}</td>
                 </tr>
                 <tr>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Age</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.age}</td>
                 </tr>
                 <tr>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Stream</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.stream}</td>
                 </tr>
                 <tr>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">DOB</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(data.dob))}</td>
                 </tr>
               </tbody>
              
             </table>
            
              )}
              <br />
              <h1 className="text- font-bold mb-6 text-orange-600 text-center">Check Approval Status Soon!</h1>
              <br />
              </> 
                :
              <>
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
            </>}
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default CompleteRegistrationCandidate
