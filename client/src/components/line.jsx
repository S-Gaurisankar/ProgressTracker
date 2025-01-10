import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Sports Data',
        data: data.values,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.4, // Makes the line slightly curved
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 20,
          padding: 20
        }
      },
      title: {
        display: true,
        text: 'Popularity of Sports MonthWise',
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '250px', padding: '20px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;