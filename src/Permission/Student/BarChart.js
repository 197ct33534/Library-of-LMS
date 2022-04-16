import React, { memo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    // xAxes: [
    //   {
    //     drawOnChartArea: false,
    //     gridLines: {
    //       drawBorder: false,
    //       display: false,
    //     },
    //   },
    // ],
    // yAxes: [
    //   {
    //     gridLines: {
    //       display: false,
    //       drawBorder: false,
    //     },
    //     ticks: {
    //       beginAtZero: true,

    //       userCallback(value) {
    //         value = value.toString();
    //         value = value.split(/(?=(?:...)*$)/);
    //         value = value.join('.');
    //         return `${value}`;
    //       },
    //     },
    //   },
    // ],
    y: {
      beginAtZero: true,
      grid: { borderDash: [25] },
      lineWidth: 2,
      borderColor: '#C5C5C5',
    },
    x: {
      grid: {
        drawBorder: false,

        lineWidth: 0,
      },
    },
  },
};
const labels = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];
const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 24) + 1),
      backgroundColor: '#FFA75E',
      borderWidth: 0,
      borderRadius: 24,
    },
  ],
};
const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default memo(BarChart);
