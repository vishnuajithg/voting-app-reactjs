import React from 'react'

const CandidateNavBar = () => {
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-1">
    <div className="flex flex-row bg-[#409D9B] gap-2 justify-center items-center">
        <div className="bg-[#FDE9C9] m-2 p-2 rounded-md"><a href="/CandidateHome">HOME</a></div>
        <div className="bg-[#DBF094] m-2 p-2 rounded-md"><a href="/CompleteRegistrationCandidate">Complete Registration</a></div>
        <div className="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/CandidateAppStatus">View Approval Status</a></div>
        <div className="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/CandidateProposal">Upload Your Proposals</a></div>
        <div className="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/viewResultCandidate">View Results</a></div>
    </div>
    <div className="  bg-[#F4F5F7] text-red-700 h-[30px]">
        <div className="flex flex-row"> 
            <marquee behavior="" direction=""><p className="">Annoucement</p></marquee>
        </div>
    </div>
</div>
    </>
  )
}

export default CandidateNavBar
