import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import OfficialNavBar from '../components/OfficialNavBar'
import OfficialNavBar2 from '../components/OfficialNavBar2';

const CreateElectionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [showData, setShowData] = useState(false);
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/official/createdAt');
        const result = await res.json();
        console.log("result", result.electionDetails);
  
        setShowData(result.created);
        setData(result.electionDetails)
        console.log("data", data); //add data
        console.log("showData", showData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch('/api/official/createdAt');
  //       const result = await data.json();
  //       console.log("result",result)
  //       //result is consoling twice idk why!!!!!!

  //       // setShowData(result.created);
  //       setShowData(result.created);
  //       console.log("showData",showData);
  //       // setData(result.candidate);
        
  //       // console.log("data",result.candidate.name);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   // Call the function to fetch dat
  //   fetchData();
  // }, []); 

  const handleStop = () => {
    if (candidateId) {
      setCandidates([...candidates, candidateId]);
      setCandidateId('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const electionDetails = { title, description, startDate, endDate };

    try {
      const res = await fetch('/api/official/createElection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(electionDetails),
      });
      // console.log(res)
      if (res.ok) {
        alert('Election created successfully');
        navigate('/electionStartsStops');
      } else {
        alert('Error creating election');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <OfficialNavBar/>
    <OfficialNavBar2/>
    <div className="flex items-center justify-center">
      <div className="w-[70%] m-auto items-center">
        {showData ? (
          <>
       <div className="mt-6">
    <h2 className="text-xl font-bold mb-4">Election Data</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead className="bg-[#409D9B] text-white">
        <tr>
          <th className="px-6 py-4 border-b border-gray-300">Title</th>
          <th className="px-6 py-4 border-b border-gray-300">Description</th>
          <th className="px-6 py-4 border-b border-gray-300">Start Date</th>
          <th className="px-6 py-4 border-b border-gray-300">End Date</th>
          <th className="px-6 py-4 border-b border-gray-300">Update</th>
          <th className="px-6 py-4 border-b border-gray-300 ">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-4 border-b border-gray-300">{data.title}</td>
          <td className="px-6 py-4 border-b border-gray-300">{data.description}</td>
          <td className="px-6 py-4 border-b border-gray-300">{new Date(data.startDate).toLocaleString('en-GB', { hour12: true  })}</td>
          <td className="px-6 py-4 border-b border-gray-300">{new Date(data.endDate).toLocaleString('en-GB', { hour12: true })}</td>
          <td className="px-6 py-4 border-b border-gray-300">
            <button onClick={() => handleUpdate(data._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Update</button>
          </td>
          <td> <button onClick={() => handleDelete(data._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <br />
        </>
       
        ):
        
        <>
        <h1 className="text-2xl font-bold mb-6 text-center">Create New Election</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">Start Date and Time:</label>
            <input
              type="datetime-local"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">End Date and Time:</label>
            <input
              type="datetime-local"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <button type="submit" onClick={handleSubmit} className="w-full bg-[#409D9B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Election Details</button>
          </div>
        </form>
        <hr />
        <br />
        <div className='flex flex-rows gap-5 justify-center'>
        <div className="mb-4">
            <button type="submit" onClick={handleStop} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">Start Election</button>
          </div>
          <div className="mb-4">
            <button type="button" onClick={handleStop} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">Stop Election</button>
          </div>
          </div>
        </>
        
        }
        
      </div>
    </div>
    <Footer />
  </>
  );
};

export default CreateElectionForm;
