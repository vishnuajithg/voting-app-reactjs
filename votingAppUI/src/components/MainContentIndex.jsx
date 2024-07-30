import React from 'react'
import loog from '../assets/img/home1.svg'
import loogg from '../assets/img/home2.svg'
import looggg from '../assets/img/home3.svg'
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

{/* <div className=" bg-wheat-400 py-6 max-w-[1600px] mx-auto">
      <h2 className="text-center text-[24px] font-semibold mb-4">Upcoming Elections</h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap w-full">
          <div className="inline-block">
            <img src={loog} alt="Election 1" className="w-[800px] h-[400px] object-cover rounded-md mx-8 shadow-md" />
          </div>
          <div className="inline-block">
            <img src={loogg} alt="Election 2" className="w-[800px] h-[400px] object-cover rounded-md mx-8 shadow-md" />
          </div>
          <div className="inline-block">
            <img src={looggg} alt="Election 3" className="w-[800px] h-[400px] object-cover rounded-md mx-8 shadow-md" />
          </div>
        </div>
      </div>
    </div> */}
    
{/* <!-- <div>
    poster goes here
</div> --> */}


</div>
    </>
  )
}

export default MainContentIndex
