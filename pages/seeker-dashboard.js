import React from 'react';
import ProfileMetrics from '../components/ProfileMetrics';
import JobApplicationTracker from '../components/JobApplicationTracker';
import ResumeCoverCreator from '../components/ResumeCoverCreator';

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
      {/* Left panel: Resume & Cover Letter Creator */}
      <aside
        style={{
          borderRight: '1px solid #ccc',
          paddingRight: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          height: 'fit-content',
        }}
      >
        <ResumeCoverCreator />
      </aside>

      {/* Right panel: Profile Metrics + Job Application Tracker */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <ProfileMetrics />
        <JobApplicationTracker />
      </main>
    </div>
  );
}
