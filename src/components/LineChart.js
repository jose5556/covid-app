import React, { useEffect, useRef }   from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ numCases }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Example Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
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
  }, []);

  return (
    <div className="line-chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
