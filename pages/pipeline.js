// pages/pipeline.js
import Head from 'next/head';
import Link from 'next/link';
import { useJobPipeline } from '../context/JobPipelineContext';

export default function Pipeline() {
  const { viewedJobs, appliedJobs } = useJobPipeline();

  return (
    <>
      <Head>
        <title>ForgeTomorrow - Pipeline Dashboard</title>
      </Head>

      <main className="max-w-7xl mx-auto p-6 min-h-[80vh] bg-[#ECEFF1] text-[#212121] space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-[#FF7043] mb-2">Your Pipeline Dashboard</h1>
          <p className="text-gray-700 max-w-3xl mb-6">
            Track your job search progress and see insights from your activity.
          </p>
          <Link href="/jobs" passHref>
            <a className="inline-block bg-[#FF7043] hover:bg-[#F4511E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Back to Job Listings
            </a>
          </Link>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Viewed Jobs</h2>
          {viewedJobs.length === 0 ? (
            <p className="text-gray-600">You haven’t viewed any jobs yet.</p>
          ) : (
            <ul className="list-disc list-inside text-gray-700 space-y-1 max-w-3xl">
              {viewedJobs.map((job) => (
                <li key={job.id}>
                  <strong>{job.title}</strong> at {job.company} (Posted: {job.date})
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Applied Jobs</h2>
          {appliedJobs.length === 0 ? (
            <p className="text-gray-600">You haven’t applied to any jobs yet.</p>
          ) : (
            <ul className="list-disc list-inside text-gray-700 space-y-1 max-w-3xl">
              {appliedJobs.map((job) => (
                <li key={job.id}>
                  <strong>{job.title}</strong> at {job.company} (Applied: {job.date})
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-white rounded-lg shadow p-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Analytics</h2>
          <p className="text-gray-700 mb-4">Feature coming soon: visual analytics of your job search activity, application success rates, and more.</p>
          {/* Placeholder for future charts */}
          <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 italic">
            Analytics dashboard in development...
          </div>
        </section>
      </main>
    </>
  );
}
