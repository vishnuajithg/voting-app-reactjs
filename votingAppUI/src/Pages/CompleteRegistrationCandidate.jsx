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
    const [phoneNumber, setPhoneNumber] = useState('');
    const [biography, setBiography] = useState('');
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
      const candidateDetails = {stream, year, age,  phoneNumber, biography };
  
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
                           
              {showData ? <>
                <h1 className="text-2xl font-bold mb-6 text-center">You Have Completed the Registration</h1>

              {data && (
               <table className="min-w-[70%] bg-white border border-gray-300 shadow-md rounded-lg m-auto">
               <thead className="bg-[#409D9B] text-white rounded-t-lg">
                 <tr className='rounded-t-lg'>
                   <th className="px-6 py-4 border-b border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Field</th>
                   <th className="px-6 py-4 border-b border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Value</th>
                 </tr>
               </thead>
               <tbody className="rounded-b-lg">
               <tr className="bg-gray-50 hover:bg-gray-100">
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Name:</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.name.toUpperCase()}</td>
                 </tr>
                 <tr className="bg-gray-50 hover:bg-gray-100">
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Date of Birth:</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{new Date(data.dob).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
                 </tr>
                 <tr className="bg-gray-50 hover:bg-gray-100">
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Stream of Studying:</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.stream}</td>
                 </tr>
                 <tr className="bg-white hover:bg-gray-100">
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Year of Studying:</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.year}</td>
                 </tr>
                 <tr className="bg-gray-50 hover:bg-gray-100">
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Age:</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.age}</td>
                 </tr>
                 <tr className="bg-white hover:bg-gray-100">
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Phone Number:</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.phoneNumber}</td>
                 </tr>
                 <tr className="bg-gray-50 hover:bg-gray-100 rounded-t-lg"> 
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">Brief Biography:</td>
                   <td className="px-6 py-4 border-b border-gray-300 text-gray-700">{data.biography}</td>
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
            <form onSubmit={handleSubmit} className="w-[70%] m-auto rounded-lg border border-gray-300 p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Complete Registration</h1>
  <div className="mb-4">
    
    <label htmlFor="stream" className="block text-gray-700 font-bold mb-2">Stream of Studying:</label>
    <input
      type="text"
      id="stream"
      value={stream}
      onChange={(e) => setStream(e.target.value)}
      placeholder="Enter Stream of Studying"
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
      title="Stream of Studying"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year of Studying:</label>
    <input
      type="number"
      id="year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
      min="1"
      max="6"
      pattern="\d{1}"
      placeholder="Enter year of studying"
      title="Please enter the year of studying (1-6)"
      inputMode="numeric"
      maxLength="1"
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
      min="0"
      max="999"
      pattern="\d{3}"
      placeholder="Enter your age"
      title="Please enter your age (max 3 digits)"
    />
  </div>
  <div className="mb-4">
  <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
  <input
    type="tel"
    id="phoneNumber"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    pattern="\d{10}"
    maxLength="10"
    title="Please enter a 10-digit phone number."
    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    required
    placeholder="Enter your phone number"
  />
</div>
<div className="mb-4">
  <label htmlFor="biography" className="block text-gray-700 font-bold mb-2">Brief Biography:</label>
  <textarea
    id="biography"
    value={biography}
    onChange={(e) => setBiography(e.target.value)}
    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    rows="4"
    required
    placeholder="Enter your biography in few words"
  />
</div>

  <div className="mb-4">
    <button type="submit" className="w-full bg-[#409D9B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Registration</button>
  </div>
</form>

            </>}
          </div>
        </div>
        <br /><br />
        <Footer />
      </>
    );
  };

export default CompleteRegistrationCandidate
