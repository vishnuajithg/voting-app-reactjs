import React, { useEffect, useState } from 'react';
// import NavBarCommon from '../components/NavBarCommon'
import VoterNavBar from '../components/VoterNavBar'
import VoterNavBar2 from '../components/VoterNavBar2'
import Footer from '../components/Footer'

const VoterHome = () => {

  const [fullName, setsetFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stream, setStream] = useState('');
  const [year, setYear] = useState('');
  const [registrationDate ,setRegistrationDate] = useState('');

  // const [password, setPassword] = useState('');

    useEffect(() => { 
      // Fetch user details using the username
      const fetchUserDetails = async () => {
        const res = await fetch(`/api/voter/voterHome`);
        const data = await res.json();
        // Do something with the user details
        console.log(data)

        setsetFullName(data.fullName);
        setStudentId(data.studentId);
        setDob(new Date(data.dob).toISOString().split('T')[0]);
        setEmail(data.email);
        setPhone(data.phone);
        setStream(data.stream);
        setYear(data.year);
        setRegistrationDate(new Date(data.registrationDate).toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }));
      };
      fetchUserDetails();
    }, []);

  return (
    <>
      <VoterNavBar />
      <VoterNavBar2 />
      <div>
  <h1 className="text-left ml-[15%] mt-[-10px] text-[25px]">
    Welcome back, <span className="font-black text-blue-500 text-[25px]">{fullName.toUpperCase()}!</span>
  </h1>
  <br />
</div>
<div>
  <table className="min-w-[60%] bg-white shadow-md rounded-lg m-auto mt-1">
    <thead className="bg-[#409D9B] text-white rounded-t-lg">
      <tr>
        <th className="px-6 py-4 text-left text-base font-semibold uppercase tracking-wider">Profile Detail</th>
        <th className="px-6 py-4 text-left text-base font-semibold uppercase tracking-wider">Information</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 text-gray-700">Full Name</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{fullName.toLocaleUpperCase()}</td>
      </tr>
      <tr className="bg-white">
        <td className="px-6 py-4 text-gray-700">Student ID</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{studentId}</td>
      </tr>
      <tr className="bg-white">
        <td className="px-6 py-4 text-gray-700">Date of Birth</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{new Date(dob).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 text-gray-700">Email Address</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{email}</td>
      </tr>
      <tr className="bg-white">
        <td className="px-6 py-4 text-gray-700">Phone Number</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{phone}</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 text-gray-700">Stream of Studying</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{stream}</td>
      </tr>
      <tr className="bg-white">
        <td className="px-6 py-4 text-gray-700">Year of Studying</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{year}</td>
      </tr>
      <tr className="bg-white">
        <td className="px-6 py-4 text-gray-700">Registration Date</td>
        <td className="px-6 py-4 text-gray-700 font-semibold">{registrationDate}</td>
      </tr>
    </tbody>
  </table>
</div>
      <br />
      <br /><br />
      <br />
      <Footer />
    </>
  );
}

export default VoterHome
