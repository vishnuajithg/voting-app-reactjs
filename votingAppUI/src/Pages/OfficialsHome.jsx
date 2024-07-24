import React from 'react'
import OfficialNavBar from '../components/OfficialNavBar'
import Footer from '../components/Footer'
import OfficialNavBar2 from '../components/OfficialNavBar2'

const OfficialsHome = () => {
  return (
    <>
<OfficialNavBar/>  
<OfficialNavBar2/>

<div class="max-w-[85%] grid grid-cols-1 md:grid-cols-3 gap-4 m-auto">
    <div class="bg-green-500 text-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Voters Approved</h3>
        <p class="text-3xl font-bold">250</p>
    </div>

    <div class="bg-red-500 text-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Voters Rejected</h3>
        <p class="text-3xl font-bold">50</p>
    </div>

    <div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Candidates Approved</h3>
        <p class="text-3xl font-bold">20</p>
    </div>

    <div class="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Candidates Rejected</h3>
        <p class="text-3xl font-bold">5</p>
    </div>

    <div class="bg-purple-500 text-white p-4 rounded-lg shadow-md col-span-3 md:col-span-1">
        <h3 class="text-lg font-semibold mb-2">Progress of Election</h3>
        <p class="text-lg font-semibold">50% Complete</p>
        <div class="w-full bg-gray-300 mt-2 rounded-full">
            <div class="bg-green-500 text-xs leading-none py-1 text-center text-white rounded-full w-[50%]">50%</div>
        </div>
    </div>

    <div class="bg-purple-500 text-white p-4 rounded-lg shadow-md col-span-3 md:col-span-1">
        <h3 class="text-lg font-semibold mb-2">Current Election Status</h3>
        <p class="text-3xl font-bold">Active</p>
    </div>
</div>

<div class="max-w-[70%] mt-8 p-4 bg-white border border-gray-300 rounded-lg shadow-md m-auto">
    <h3 class="text-lg font-semibold mb-4">Live Result Viewer</h3>
    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
        <p class="text-lg font-semibold">Candidate 1</p>
        <p class="text-xl font-bold text-green-500">60%</p>
    </div>
    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
        <p class="text-lg font-semibold">Candidate 2</p>
        <p class="text-xl font-bold text-red-500">40%</p>
    </div>
    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
        <p class="text-lg font-semibold">Candidate 3</p>
        <p class="text-xl font-bold text-blue-500">30%</p>
    </div>
    </div>
    <br />
    <Footer/>
    </>
  )
}

export default OfficialsHome
