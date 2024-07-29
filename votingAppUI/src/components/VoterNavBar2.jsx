    import React from 'react'
    
    const VoterNavBar2 = () => {
      return (
        <>
          <div className="grid grid-rows-2 grid-cols-1">
    <div className="flex flex-row bg-[#409D9B] gap-2 justify-center items-center">
        <div className="bg-[#FDE9C9] m-2 p-2 rounded-md"><a href="/voterHome">HOME</a></div>
        <div className="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/voterAppStatus">View Approval Status</a></div>
       
        <div className="bg-[#DBF094] m-2 p-2 rounded-md"><a href="/voteCast">Vote Cast</a></div>
        <div className="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/viewResultVoter">View Result</a></div>
    </div>
    <div className="bg-[#F4F5F7] text-red-700 p-1 text-center h-[30px]">
        <div className="p-0"> 
            <marquee behavior="" direction=""><p className="">Welcome!

Please ensure that you check your approval status. Once approved, proceed to cast your vote. Your participation is crucial, and your vote makes a difference.

Thank you for your cooperation and engagement.</p></marquee>
        </div>
    </div>
</div>
        </>
      )
    }
    // s
    export default VoterNavBar2
    