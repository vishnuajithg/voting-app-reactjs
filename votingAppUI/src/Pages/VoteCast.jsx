import React from 'react'
import VoterNavBar from '../components/VoterNavBar'
import VoterNavBar2 from '../components/VoterNavBar2'
import Footer from '../components/Footer'
import votedSvg from '../assets/img/votedImg.svg'
// import { useState, useEffect } from 'react'
import { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom'


const VoteCast = () => {
    const selectRef = useRef();
    const [candidates, setCandidates] = useState([]);
    const [showData, setShowData] = useState(false);
    // const [data, setData] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
               
                // console.log("showData",showData);
                // setData(result.candidate);
                

                const response = await fetch('/api/voter/getApprovedCandidates');
                console.log(response);
                const data = await response.json();
                console.log(data.candidates[0].name);
                // setCandidates(Object.values(result.candidates))
                setCandidates(data.candidates)
                console.log(candidates)

                const res = await fetch('/api/voter/hasVoted');
                const result = await res.json();
                console.log(result)
                setShowData(result.hasVoted);

            } catch (error) {
                console.error(error);
            }
        };
        fetchCandidates()
    },[refresh]);
    // console.log(typeof(candidates))

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedValue = selectRef.current.value;
        console.log(selectedValue);
        
        handleVote()
        
    }

    
    const handleVote = async (e) => {
        // e.preventDefault();
        const selectedValue = selectRef.current.value;
       
        try {
            const electionRespon = await fetch('/api/voter/getElectionDetails');
            const electionData = await electionRespon.json();
            console.log("election title",electionData.electionDetails[0].title);
            const data = {
                electionTitle: electionData.electionDetails[0].title,
                candidateName: selectedValue,
            };
            // const electionTitle = electionData.title;
            // console.log(electionTitle);
            const isApproved = await fetch('/api/voter/isApproved');
            const resultJson = await isApproved.json();
            const electionStarted = await fetch('/api/voter/isElectionStarted');
            const isElectionStarted = await electionStarted.json();
            console.log('electionstarted',isElectionStarted.isActive);
            if(isElectionStarted.isActive === false){
                alert("Please wait for the election to start");
                return;
            }
            if (!window.confirm(`Are you sure you want to cast your vote for [${selectedValue}]? Press OK to confirm.`)) {
                return;
            }
            if (resultJson.isApproved === false) {
                alert("Please wait for the admin to approve your vote");
                return;
            }else{
                const response = await fetch('/api/voter/castVote', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                // const hasVoted =  await fetch('/api/voter/hasVoted', { 
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // });
                console.log(result);
                alert("Voted successfully");
                setRefresh(!refresh);
            }
            setRefresh(!refresh);
        } catch (error) {
            console.error(error);
        }
    }
    return (
    <>
    <VoterNavBar/>
    <VoterNavBar2/>
    <br />    <br />
       
    {showData ? <>
              { (
                
              <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center mb-2 px-32 shadow-xl p-8 rounded-md">
                
                  <img src={votedSvg} alt="voted" className="w-24 h-24" /><br />
                  <h1 className="text-3xl font-bold text-center text-blue-600">Successfully Voted!</h1>
                  <div className="mx-auto mt-4 w-24 border-2 border-blue-600 rounded-full"></div>
                  <p className="text-center text-blue-600 mt-4">Thank you for your participation.</p>
                </div>
                
              
            </div>
              )}
              
              </> 
                :
              <>
<div class="mx-[15%] flex gap-4">
<div class="w-1/2 bg-white border border-gray-300 rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-4 text-center">Instructions for Voters</h2>
    <ol class="list-decimal list-inside space-y-4 text-gray-700">
        <li>
            <strong>Check Approval Status:</strong> Before you can vote, ensure that your registration has been approved by the officials. Regularly check the Approval Status tab or contact the officials if your status is not updated in time.
        </li>
        <li>
            <strong>View Candidates:</strong> Once approved and the election period has started, you can view the list of candidates who are competing in the election.
        </li>
        <li>
            <strong>Cast Your Vote:</strong> Carefully vote for your preferred candidates, ensuring that you make no mistakes in your selections.
        </li>
        <li>
            <strong>Check Results:</strong> After the election ends, visit the Results tab to see the outcome of the election.
        </li>
    </ol>
</div>
    <div class="w-1/2 mx-auto my-auto bg-white p-10 rounded-lg shadow-2xl">
        <h1 class="text-3xl font-extrabold text-[#172B4D] mb-6 text-center">Cast Your Vote</h1>
        
            <select
            ref={selectRef} 
                class="block w-full px-4 py-3 pr-8 leading-loose text-lg font-semibold text-gray-700 bg-white border border-gray-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-gray-500 mt-1 select-sm"
                style={{fontFamily: 'Helvetica'}}
                defaultValue="" name="select">
                <option value="" disabled className="text-gray-500 text-center py-2">Select the candidate</option>
                <optgroup label="Candidates List">
                {candidates.map((candidate) => (
                    <option key={candidate._id} value={candidate.name} className="text-gray-700 font-semibold py-4">{candidate.name} <span>- {candidate.stream}</span></option>
                ))}
                </optgroup>
            </select>
            <br />
            <button type="submit" onClick={handleSubmit} class="w-full bg-[#409D9B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition duration-300 mx-auto">Submit Vote</button>
        
    </div>
   
</div>

            </>}

    {/*  */}
    <br />
    <br />
    <br />
    <br />
  

    <Footer/>
    </>
  )
}

export default VoteCast
