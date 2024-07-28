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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/official/createdAt');
        const result = await res.json();
        setShowData(result.created);
        setData(result.electionDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[refresh]);

  const handleStop = async () => {
    try {
      const response = await fetch('/api/official/stopElection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Election stopped successfully');
        navigate('/electionStartsStops');
      } else {
        alert('Error stopping election');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleStart = async () => {
    try {
      const response = await fetch('/api/official/startElection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Election started successfully');
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
                      <th className="px-6 py-4 border-b border-gray-300">Actions</th>
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
                      <td className="px-6 py-4 border-b border-gray-300">
                        {isEditing ? (
                          <button
                            onClick={() => handleUpdate(data._id)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={handleEdit}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          >
                            Edit
                          </button>
                        )}
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
                  <button onClick={handleStart} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">Start Election</button>
                </div>
                <div className="mb-4">
                  <button onClick={handleStop} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">Stop Election</button>
                </div>
              </div>
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
            <button type="submit" onClick={handleSubmit} className="w-full bg-[#409D9B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Election Details</button>
          </div>
        </form>
        <hr />
        <br />
        </>
        
        }
        
      </div>
    </div>
    <Footer />
  </>
  );
};

export default CreateElectionForm;
