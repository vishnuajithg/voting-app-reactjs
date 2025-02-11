import React from 'react'
import { Link } from "react-router-dom";

const NavBarCommon = () => {
  return (
    <>
       <nav>
        <div className="flex justify-between bg-[#F4F5F7] rounded-md p-1">
            <div>
                <a href="/"> <h2 className="text-[#172B4D] font-black text-[40px] ml-16" id="font-body">VOTING APP</h2></a>
               
            </div>
            {/* <!-- <div> --> */}
            <div className="flex items-center mx-5">
                <div className="mr-2">
                    <a href="/">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                      </svg></a>
                </div>
                {/* <div>
                    <a className="bg-[#FFD32D] text-[#172B4D] p-2 rounded-md mx-3 font-medium text-[16px]   hover:bg-[#F7BE16] hover:text-white" href="#">LOG IN</a>
                </div>
                <div><a className="bg-[#2963fd] text-white p-2 rounded-md mx-3 font-medium text-[16px] hover:bg-[#07689F] hover:text-white" href="">SIGN UP</a></div> */}
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBarCommon
