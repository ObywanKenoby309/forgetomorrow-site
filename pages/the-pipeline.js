// pages/pipeline.js
import Head from 'next/head';

export default function Pipeline() {
  const alertComingSoon = (feature) => () => alert(`${feature} feature coming soon!`);

  return (
    <>
      <Head>
        <title>ForgeTomorrow - Pipeline Dashboard</title>
      </Head>

      <main className="max-w-7xl mx-auto p-6 min-h-[80vh] bg-[#ECEFF1] text-[#212121] space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-[#FF7043] mb-2">Pipeline Dashboard</h1>
          <p className="text-gray-700 max-w-3xl mb-6">
            Track your job applications, view analytics on your progress, and manage your resume and cover letters—all in one place.
          </p>
        </section>

        {/* Application Tracker */}
        <section
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
          onClick={alertComingSoon('Application Tracker')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('Application Tracker')(); }}
          aria-label="Application Tracker"
        >
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Application Tracker</h2>
          <p>Keep track of jobs you have applied to, their status, and upcoming deadlines.</p>
        </section>

        {/* Analytics Dashboard */}
        <section
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
          onClick={alertComingSoon('Analytics Dashboard')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('Analytics Dashboard')(); }}
          aria-label="Analytics Dashboard"
        >
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Analytics</h2>
          <p>View insights on profile views, application success rates, and interview invitations.</p>
        </section>

        {/* Resume and Cover Letter Editor */}
        <section
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
          onClick={alertComingSoon('Resume and Cover Letter Editor')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('Resume and Cover Letter Editor')(); }}
          aria-label="Resume and Cover Letter Editor"
        >
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Resume and Cover Letter Editor</h2>
          <p>Edit, save, and customize your resumes and cover letters directly within ForgeTomorrow.</p>
        </section>
      </main>
    </>
  );
}
