import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ numCases }) => {
  const chartRef = useRef(null);

  useEffect(() => {

    if (numCases.length === 0) {
      return;
    }

    const date = numCases.map((index) => index.date);
    const cases = numCases.map((index) => index.count);

    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [{
          label: 'Number of cases',
          data: cases,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [numCases]);


  return (
    <div className="line-chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
