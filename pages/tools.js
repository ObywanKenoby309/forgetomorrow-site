// pages/tools.js
import Head from 'next/head';

export default function Tools() {
  const alertComingSoon = (feature) => () => alert(`${feature} feature coming soon!`);

  return (
    <>
      <Head>
        <title>ForgeTomorrow - Tools</title>
      </Head>

      <main className="max-w-7xl mx-auto p-6 min-h-[80vh] bg-[#ECEFF1] text-[#212121] space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-[#FF7043] mb-2">Your Tools</h1>
          <p className="text-gray-700 max-w-3xl mb-6">
            Access powerful resources to optimize your job search — from resume and cover letter editors to interview prep and ATS tips.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
            role="button"
            tabIndex={0}
            onClick={alertComingSoon('Resume Builder')}
            onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('Resume Builder')(); }}
            aria-label="Resume Builder"
          >
            <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Resume Builder</h2>
            <p>Create or upload resumes, customize formats, and export polished documents ready to apply.</p>
          </div>

          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
            role="button"
            tabIndex={0}
            onClick={alertComingSoon('Cover Letter Editor')}
            onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('Cover Letter Editor')(); }}
            aria-label="Cover Letter Editor"
          >
            <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Cover Letter Editor</h2>
            <p>Craft tailored cover letters with templates and expert tips for every job application.</p>
          </div>

          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
            role="button"
            tabIndex={0}
            onClick={alertComingSoon('ATS Optimization')}
            onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('ATS Optimization')(); }}
            aria-label="ATS Optimization"
          >
            <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">ATS Optimization</h2>
            <p>Analyze your resume to improve keyword matching and get past applicant tracking systems.</p>
          </div>

          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
            role="button"
            tabIndex={0}
            onClick={alertComingSoon('Interview Prep')}
            onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('Interview Prep')(); }}
            aria-label="Interview Prep"
          >
            <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Interview Prep</h2>
            <p>Practice common interview questions and get tips to impress hiring managers.</p>
          </div>

          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
            role="button"
            tabIndex={0}
            onClick={alertComingSoon('Mentorship & Coaching')}
            onKeyPress={(e) => { if(e.key === 'Enter') alertComingSoon('Mentorship & Coaching')(); }}
            aria-label="Mentorship and Coaching"
          >
            <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Mentorship & Coaching</h2>
            <p>Connect with mentors and coaches for personalized guidance and support.</p>
          </div>
        </section>
      </main>
    </>
  );
}
