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
  highestViewedPost: {
    title: 'How to Optimize Your Resume for ATS Systems',
    views: 1200,
    url: '/user/posts/123',
  },
  highestViewedComment: {
    snippet: 'Great tips! I found this very helpful, thanks!',
    likes: 350,
    url: '/user/comments/456',
  },
  lastProfileViewer: {
    name: 'Jane Doe',
    profileUrl: '/profile/views',
  },
};

export default function ProfileMetrics({
  showTopContent = false,
  showLastProfileViewer = false,
}) {
  const data = {
    labels: mockData.daysLabels,
    datasets: [
      {
        label: 'Profile Views',
        data: mockData.viewsLast7Days,
        backgroundColor: 'rgba(255, 112, 67, 0.7)', // brand orange
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

      {/* Profile Views Chart */}
      <Bar data={data} options={options} />

      {/* Last Profile Viewer */}
      {showLastProfileViewer && (
        <div
          style={{
            marginTop: 20,
            textAlign: 'center',
            borderTop: '1px solid #eee',
            paddingTop: 15,
          }}
        >
          <strong>Last Profile Viewer:</strong>
          <div
            style={{
              marginTop: 8,
              fontWeight: 'bold',
              color: '#FF7043',
              fontSize: 16,
            }}
          >
            {mockData.lastProfileViewer.name}
          </div>
          <a
            href={mockData.lastProfileViewer.profileUrl}
            style={{
              color: '#FF7043',
              fontWeight: 'bold',
              display: 'block',
              marginTop: 4,
              textDecoration: 'underline',
            }}
          >
            See all profile views
          </a>
        </div>
      )}

      {/* Top Content: Highest Viewed Post & Comment */}
      {showTopContent && (
        <section style={{ marginTop: 30, borderTop: '1px solid #eee', paddingTop: 20 }}>
          <h3 style={{ color: '#FF7043', marginBottom: 10 }}>Top Content</h3>

          {/* Highest Viewed Post */}
          <div style={{ marginBottom: 20 }}>
            <strong>Highest Viewed Post:</strong>
            <p style={{ margin: '6px 0' }}>
              <a
                href={mockData.highestViewedPost.url}
                style={{ color: '#FF7043', textDecoration: 'underline', fontWeight: 'bold' }}
              >
                {mockData.highestViewedPost.title}
              </a>
            </p>
            <small>Views: {mockData.highestViewedPost.views.toLocaleString()}</small>
            <br />
            <a
              href="/user/posts"
              style={{ color: '#FF7043', fontWeight: 'bold', marginTop: 4, display: 'inline-block' }}
            >
              View all posts
            </a>
          </div>

          {/* Highest Viewed Comment */}
          <div>
            <strong>Highest Viewed Comment:</strong>
            <p style={{ margin: '6px 0' }}>"{mockData.highestViewedComment.snippet}"</p>
            <small>Likes: {mockData.highestViewedComment.likes.toLocaleString()}</small>
            <br />
            <a
              href="/user/comments"
              style={{ color: '#FF7043', fontWeight: 'bold', marginTop: 4, display: 'inline-block' }}
            >
              View all comments
            </a>
          </div>
        </section>
      )}
    </section>
  );
}
