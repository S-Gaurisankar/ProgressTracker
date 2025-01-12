import { Pie } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChart = ({data, title = 'Priority of Tasks'}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Update chart when new data arrives
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [data]);
  // Mock data for AQI of different states
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          'rgb(220, 20, 60)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderColor: [
          'rgb(220, 20, 60)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          boxWidth: 20,
          padding: 20,
          font: {
            size: 16
          }
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || '';
            return `${label}: Count ${value}`;
          }
        },
        bodyFont: {
          size: 16
        }
      }
    },
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '300px',
      padding: '20px'
    }}>
      <Pie ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default PieChart;