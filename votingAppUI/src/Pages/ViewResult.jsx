import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ViewResult = () => {
  const [candidateCounts, setCandidateCounts] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: 'pie',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      labels: [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
    },
  });

  useEffect(() => {
    const fetchCandidateCounts = async () => {
      try {
        const response = await fetch('/api/official/viewResult');
        const data = await response.json();
        setCandidateCounts(data);

        // Prepare data for the chart
        const series = data.map(candidate => candidate.count);
        const labels = data.map(candidate => candidate._id);
        setChartOptions(prevState => ({
          ...prevState,
          series,
          options: {
            ...prevState.options,
            labels,
          },
        }));
      } catch (error) {
        console.error('Error fetching candidate counts:', error);
      }
    };

    fetchCandidateCounts();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center mx-auto">
      <div className="mx-auto m-2 p-2 rounded-md">
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="pie" width={480} />
      </div>
      <br />
       <div>
       <table className="min-w-[70%] bg-white border border-gray-300 m-auto text-gray-800 shadow-md rounded-lg overflow-hidden">
  <thead className="bg-[#409D9B] text-white">
    <tr>
      <th className="px-6 py-4 border-b border-gray-300 font-medium text-left">Candidate Name</th>
      <th className="px-6 py-4 border-b border-gray-300 font-medium text-left">Count</th>
    </tr>
  </thead>
  <tbody>
    {candidateCounts.map(candidate => (
      <tr key={candidate._id} className="hover:bg-gray-50">
        <td className="px-6 py-4 border-b border-gray-300">{candidate._id}</td>
        <td className="px-6 py-4 border-b border-gray-300">{candidate.count}</td>
      </tr>
    ))}
  </tbody>
</table>
<br />  
       </div>
      </div>
     
      <br />
    </>
  );
};

export default ViewResult;
