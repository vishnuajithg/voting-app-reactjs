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
