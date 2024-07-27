    import React from 'react'
    
    const VoterNavBar2 = () => {
      return (
        <>
          <div class="grid grid-rows-2 grid-cols-1">
    <div class="flex flex-row bg-[#409D9B] gap-2 justify-center items-center">
        <div class="bg-[#FDE9C9] m-2 p-2 rounded-md"><a href="/voterHome">HOME</a></div>
        <div class="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/voterAppStatus">View Approval Status</a></div>
       
        <div class="bg-[#DBF094] m-2 p-2 rounded-md"><a href="/voteCast">Vote Cast</a></div>
        <div class="bg-[#DBF094]  m-2 p-2 rounded-md"><a href="/viewResultVoter">View Result</a></div>
    </div>
    <div class="  bg-[#F4F5F7] text-red-700 h-[30px]">
        <div class=""> 
            <marquee behavior="" direction=""><p class="">Annoucement</p></marquee>
        </div>
    </div>
</div>
        </>
      )
    }
    
    export default VoterNavBar2
    