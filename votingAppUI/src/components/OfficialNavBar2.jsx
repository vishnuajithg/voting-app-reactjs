import React from 'react'

const OfficialNavBar2 = () => {
  return (
    <>
      <div class="grid grid-rows-2 grid-cols-1">
    <div class="flex flex-row bg-[#409D9B] gap-2 justify-center items-center">
        <div class="bg-[#FDE9C9] m-2 p-2 rounded-md"><a href="/officialsHome">HOME</a></div>
        <div class="bg-[#DBF094] m-2 p-2 rounded-md"><a href="/viewVoters">View Voters</a></div>
        <div class="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/viewCandidates">View Candidates</a></div>
        <div class="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/electionStartsStops">Election start/stop</a></div>
        {/* <div class="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="sendSecretCode.html">Secret Code Generation</a></div> */}
        <div class="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="viewResultOfficial">View Results</a></div>
    </div>
</div>
    </>
  )
}

export default OfficialNavBar2
