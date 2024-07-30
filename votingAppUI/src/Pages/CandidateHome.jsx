import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
import CandidateNavBar from '../components/CandidateNavBar'
import Footer from '../components/Footer'
import CandidateNavBar2 from '../components/CandidateNavBar2'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const CandidateHome = () => {
    
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');

    useEffect(() => {
      // Fetch user details using the username
      const fetchUserDetails = async () => {
        const res = await fetch(`/api/candidate/candidateHome`);
        const data = await res.json();
        // Do something with the user details
        console.log(data)
        setName(data.name);
        // setDob(new Date(data.dob).toISOString().split('T')[0]);
      };
  
      fetchUserDetails();
    //   setName(data);
    //   setDob(new Date(data.dob).toISOString().split('T')[0]);
    }, []);
    
    
  return (
    <>
        <CandidateNavBar2/>
        <CandidateNavBar />
        <ToastContainer />
        <div >
            <br />
            <br />
    <h1 className="mt-[-20px] text-center text-[25px] font-bold">Welcome back,<span className="font-black text-blue-500 text-[30px]"> {name.toUpperCase()}!</span>  </h1>
</div>
<br /><br />
<div class="w-[50%] mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-4 text-center">Instructions for Candidates</h2>
    <ol class="list-decimal list-inside space-y-4 text-gray-700">
        <li>
            <strong>Complete Registration:</strong> Ensure that you fill out the registration form thoroughly and accurately. Include all required details and double-check for any errors before submission. Submit your registration form for review.
        </li>
        <li>
            <strong>Wait for Approval:</strong> After submission, your registration will be reviewed by the officials. Regularly check the Approval Status tab to see if your registration has been approved. If not approved, please contact the officials for assistance.
        </li>
        <li>
            <strong>Register as a Voter:</strong> Ensure that you are registered as a voter to participate in the election.
        </li>
        <li>
            <strong>Election Starts:</strong> Once the election period officially begins, you are eligible to participate. Make sure to adhere to all election guidelines and regulations during this period.
        </li>
        <li>
            <strong>Check Results:</strong> After the election period ends, visit the Results tab to view the outcome of the election.
        </li>
    </ol>
</div>


<br />
<br />
<br />
<br />
<br />
<br />

        <Footer />
    </>
  )
}

export default CandidateHome
