import React from 'react'

const MainContentIndex = () => {
  return (
    <>
      <div className="grid grid-cols-3">

<div className="bg-[#084594] col-span-3 h-[536px] rounded-md" >
    <div className="grid grid-cols-1 grid-rows-3 justify-items-center text-center gap-2 font-[600] mt-[100px]">
        <div className="bg-[#008E89] w-52  h-[80px]  rounded-md flex items-center justify-center">
            <a href="/forCandidates" className="text-white text-[10px] text-[20px]">For Candidates</a>
        </div>
        <div className="bg-[#D29D2B] w-52 h-[80px] rounded-md flex items-center justify-center ">
            <a href="/forVoters" className="text-white text-[10px]  text-[20px]">For Voters</a>
        </div>
        <div className="bg-[#C1F8CF] w-52 h-[80px] rounded-md flex items-center justify-center">
            <a href="/officials" className="text-[#172B4D] text-[10px]  text-[20px]">Official Login</a>
        </div>
    </div>
</div>

{/* <!-- <div>
    poster goes here
</div> --> */}


</div>
    </>
  )
}

export default MainContentIndex
