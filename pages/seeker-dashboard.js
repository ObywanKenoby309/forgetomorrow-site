import React from 'react';
import ProfileMetrics from '../components/ProfileMetrics';
import JobApplicationTracker from '../components/JobApplicationTracker';

export default function SeekerDashboard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '350px 1fr',
        gap: '20px',
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: '#ECEFF1',
      }}
    >
      {/* Left sidebar toolbar */}
      <aside
        style={{
          borderRight: '1px solid #ccc',
          paddingRight: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Resume & Cover Creator Link */}
        <div>
          <h2 style={{ color: '#FF7043', marginBottom: '12px' }}>Resume/Cover Creator</h2>
          <a
            href="/resume-cover"
            style={{
              display: 'block',
              backgroundColor: '#FF7043',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F4511E')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF7043')}
            aria-label="Go to Resume and Cover Letter Creator"
          >
            Open Creator
          </a>
        </div>

        {/* Jobs page reference */}
        <div>
          <h3 style={{ color: '#FF7043', marginBottom: '8px' }}>Ready to Apply?</h3>
          <a
            href="/jobs"
            style={{
              display: 'block',
              backgroundColor: '#FF7043',
              color: 'white',
              padding: '10px 18px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F4511E')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF7043')}
            aria-label="Explore Job Listings"
          >
            Explore Job Listings
          </a>
        </div>

        {/* Hearth page reference */}
        <div>
          <h3 style={{ color: '#FF7043', marginBottom: '8px' }}>Career Growth</h3>
          <a
            href="/hearth"
            style={{
              display: 'block',
              backgroundColor: '#FF7043',
              color: 'white',
              padding: '10px 18px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F4511E')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF7043')}
            aria-label="Visit Your Hearth for Mentors and Resources"
          >
            Visit Your Hearth
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <ProfileMetrics
          showTopContent
          showLastProfileViewer
          // Add any other props your ProfileMetrics needs for these features
        />
        <JobApplicationTracker />
      </main>
    </div>
  );
}
