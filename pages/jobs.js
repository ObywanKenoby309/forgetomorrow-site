// pages/jobs.js
import Head from 'next/head';

export default function Jobs() {
  return (
    <>
      <Head>
        <title>ForgeTomorrow - Job Listings</title>
      </Head>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[80vh]">
        {/* Main content: 2/3 width */}
        <section className="lg:col-span-2 space-y-6">
          {/* Search Filters */}
          <form className="flex flex-col sm:flex-row gap-3" role="search" aria-label="Job search form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="keywords"
              placeholder="Job title or keywords"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
              aria-label="Job title or keywords"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
              aria-label="Location"
            />
            <button
              type="submit"
              className="bg-[#FF7043] hover:bg-[#F4511E] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              aria-label="Search jobs"
            >
              Search
            </button>
          </form>

          {/* Recent Job Listings */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-[#FF7043]">Recent Job Listings</h2>
            <ul className="space-y-3" role="list" aria-label="Recent job listings">
              <li className="flex justify-between">
                <div><strong>Software Engineer</strong> – Tech Innovators</div>
                <time dateTime="2025-07-30" className="text-gray-500 text-sm">3d ago</time>
              </li>
              <li className="flex justify-between">
                <div><strong>Product Designer</strong> – Creative Solutions</div>
                <time date
