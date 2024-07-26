import React from 'react'
import OfficialNavBar from '../components/OfficialNavBar'
import OfficialNavBar2 from '../components/OfficialNavBar2'
import Footer from '../components/Footer'

const ElectionStartsStops = () => {
  return (
    <>
      <OfficialNavBar/>
      <OfficialNavBar2/>
      <div class="max-w-[70%] overflow-x-auto m-auto">

      <form class="space-y-6" action="/start-election" method="POST">
        <div class="mb-4">
          <label for="electionName" class="block text-gray-700 font-semibold mb-2">Election Name</label>
          <input type="text" id="electionName" name="electionName" class="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200" required />
        </div>
        <div class="mb-4">
          <label for="electionDesc" class="block text-gray-700 font-semibold mb-2">Election Description</label>
          <textarea id="electionDesc" name="electionDesc" class="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200" rows="3" required></textarea>
        </div>
        <button type="submit" class="w-full bg-[#409D9B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition duration-300">Declare Election</button>
      </form>

    <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-[#409D9B] text-white">
            <tr>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Action</th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">Button</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-50">
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Start Election</td>
                <td class="px-6 py-4 border-b border-gray-300">
                    <form action="/start-election" method="POST">
                        <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Start</button>
                    </form>
                </td>
            </tr>
            <tr class="bg-white">
                <td class="px-6 py-4 border-b border-gray-300 text-gray-700">Stop Election</td>
                <td class="px-6 py-4 border-b border-gray-300">
                    <form action="/stop-election" method="POST">
                        <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Stop</button>
                    </form>
                </td>
            </tr>
        </tbody>
    </table>
</div><br /><br />
<br />
<br /><br />
<br />
<br /><br />
<br /><br /><br />
<br /><br />
      <Footer/>
    </>
  )
}

export default ElectionStartsStops
