import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import OfficialNavBar from '../components/OfficialNavBar';
import OfficialNavBar2 from '../components/OfficialNavBar2';

const CreateElectionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [showData, setShowData] = useState(false);
  const [data, setData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [electionStarted, setElectionStarted] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/official/createdAt');
        const result = await res.json();
        setShowData(result.created);
        setData(result.electionDetails);
        setElectionStarted(result.electionDetails.isActive)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[refresh]);

  const handleStop = async (id) => {
    try {
      console.log(id)
      const response = await fetch(`/api/official/stopElection/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Election stopped successfully');
        setElectionStarted(false);
        navigate('/electionStartsStops');
      } else {
        alert('Error stopping election');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleStart = async (id) => {
    try {
      const response = await fetch(`/api/official/startElection/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Election started successfully');
        setElectionStarted(true);
        navigate('/electionStartsStops');
      } else {
        alert('Error starting election');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this election?')) {
      try {
        const response = await fetch(`/api/official/deleteElection/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Election deleted successfully');
          setRefresh(!refresh);
          navigate('/electionStartsStops');
        } else {
          alert('Error deleting election');
        }
      } catch (error) {
        console.error('Error:', error);
      }
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

      if (res.ok) {
        alert('Election created successfully');
        setRefresh(!refresh); 
        navigate('/electionStartsStops');
      } else {
        alert('Error creating election');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async (id) => {
    const updatedDetails = { title, description, startDate, endDate };

    try {
      const response = await fetch(`/api/official/updateElection/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        alert('Election updated successfully');
        setIsEditing(false);
        setRefresh(!refresh); 
        navigate('/electionStartsStops');
      } else {
        alert('Error updating election');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <OfficialNavBar />
      <OfficialNavBar2 />
      <br />
      <div className="flex items-center justify-center">
        <div className="w-[70%] m-auto items-center">
          {showData ? (
            <>
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4"> Update Election Data</h2>
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
  <thead className="bg-[#409D9B] text-white">
    <tr>
      <th className="px-6 py-4 border-b border-gray-300 text-left">Title</th>
      <th className="px-6 py-4 border-b border-gray-300 text-left">Description</th>
      <th className="px-6 py-4 border-b border-gray-300 text-left">Start Date</th>
      <th className="px-6 py-4 border-b border-gray-300 text-left">End Date</th>
      <th className="px-6 py-4 border-b border-gray-300 text-center">Save</th>
      <th className="px-6 py-4 border-b border-gray-300 text-center">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-6 py-4 border-b border-gray-300">
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        ) : (
          data.title
        )}
      </td>
      <td className="px-6 py-4 border-b border-gray-300">
        {isEditing ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        ) : (
          data.description
        )}
      </td>
      <td className="px-6 py-4 border-b border-gray-300">
        {isEditing ? (
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        ) : (
          new Date(data.startDate).toLocaleString('en-GB', { hour12: true })
        )}
      </td>
      <td className="px-6 py-4 border-b border-gray-300">
        {isEditing ? (
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        ) : (
          new Date(data.endDate).toLocaleString('en-GB', { hour12: true })
        )}
      </td>
      <td className="px-6 py-4 border-b border-gray-300 text-center">
        {isEditing ? (
          <button
            onClick={() => handleUpdate(data._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        )}
      </td>
      <td className="px-6 py-4 border-b border-gray-300 text-center">
        <button
          onClick={() => handleDelete(data._id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

              </div>

              <br />
              <div className='flex flex-rows gap-5 justify-center'>
                <div className="mb-4">
                  <button onClick={()=>handleStart(data._id)} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">Start Election</button>
                </div>
                <div className="mb-4">
                  <button onClick={()=>handleStop(data._id)}  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">Stop Election</button>
                  {/* onClick={handleStop(data._id)} */}
                </div>
              </div>
              {electionStarted && (
              <div className="alert alert-success animate-pulse   bg-red-600 text-white text-center p-3 mt-4 text-3xl font-bold rounded rounded-md">
                The Election is live!
              </div>  
)}
        {!electionStarted && (
          <div className="bg-green-600 text-white text-xl p-3 text-center mt-4 font-bold rounded-md">
            The Election Has Not Started Yet. Please Start The Election.  
          </div>
        )}
              <br />
              <br />
            </>
          ) :
        
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
            <button type="submit" onClick={handleSubmit} className="w-full bg-[#409D9B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Election Details and Initialize!</button>
          </div>
        </form>
        <hr />
        <br />
        </>
        
        }
        
      </div>
    </div>
    <br /><br /><br />
    <br />
    <Footer />
  </>
  );
};

export default CreateElectionForm;
