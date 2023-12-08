import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Meu Gráfico',
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: 'rgba(0, 0, 255, 0.2)', // Cor do preenchimento em azul com transparência
      borderColor: 'blue', // Cor da linha azul
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => {
  return (
    <div>
      <h2>Gráfico de Linha Preenchido</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
