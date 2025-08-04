import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const mockData = {
  totalViews: 1234,
  postsCount: 42,
  commentsCount: 58,
  viewsLast7Days: [50, 75, 60, 80, 100, 90, 110],
  daysLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

export default function ProfileMetrics() {
  const data = {
    labels: mockData.daysLabels,
    datasets: [
      {
        label: 'Profile Views',
        data: mockData.viewsLast7Days,
        backgroundColor: 'rgba(255, 112, 67, 0.7)', // your brand orange-ish color
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <section
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 20,
        backgroundColor: 'white',
      }}
    >
      <h2 style={{ marginBottom: 20, color: '#FF7043' }}>Profile Metrics</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>{mockData.totalViews}</h3>
          <p>Profile Views</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>{mockData.postsCount}</h3>
          <p>Posts Made</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>{mockData.commentsCount}</h3>
          <p>Comments Made</p>
        </div>
      </div>

      <Bar data={data} options={options} />
    </section>
  );
}
