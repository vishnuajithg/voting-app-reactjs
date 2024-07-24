import React from 'react'

const ViewResult = () => {
  return (
    <>
    <br />
           <div class="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-3xl m-auto">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-8 text-center">Election Results</h1>
    <div class="flex justify-around items-end h-[80%] w-[80%] m-auto">
        <div class="flex flex-col items-center ">
            <div id="candidate1Bar" class="px-10 py-[70%] bg-violet-600"></div>
            <div class="text-xl font-semibold text-gray-800 mt-2">Candidate 1</div>
            <div id="candidate1Votes" class="text-lg font-bold text-gray-700">150 Votes</div>
        </div>
        <div class="flex flex-col items-center">
            <div id="candidate2Bar" class="px-10 py-[100%] bg-yellow-600"></div>
            <div class="text-xl font-semibold text-gray-800 mt-2">Candidate 2</div>
            <div id="candidate2Votes" class="text-lg font-bold text-gray-700">230 Votes</div>
        </div>
        <div class="flex flex-col items-center">
            <div id="candidate3Bar" class="px-10 py-[50%] bg-cyan-600"></div>
            <div class="text-xl font-semibold text-gray-800 mt-2">Candidate 3</div>
            <div id="candidate3Votes" class="text-lg font-bold text-gray-700">120 Votes</div>
        </div>
    </div>
</div>
<br />
    </>
  )
}

export default ViewResult
