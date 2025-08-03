// pages/jobs.js
import Head from 'next/head';
import Link from 'next/link';

export default function Jobs() {
  return (
    <>
      <Head>
        <title>ForgeTomorrow - The Pipeline</title>
      </Head>

      <main className="max-w-7xl mx-auto p-6 min-h-[80vh] bg-[#ECEFF1] text-[#212121] space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-[#FF7043] mb-2">The Pipeline</h1>
          <p className="text-gray-700 max-w-3xl mb-6">
            Welcome to your job discovery hub! Explore recent and featured job postings below. Find the role you want, then track your applications and progress from your personal Pipeline Dashboard.
          </p>
          <Link href="/pipeline" passHref>
            <a
              className="inline-block bg-[#FF7043] hover:bg-[#F4511E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              aria-label="Go to Pipeline Dashboard"
            >
              Go to Pipeline Dashboard
            </a>
          </Link>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content: 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Filters */}
            <form className="flex flex-col sm:flex-row gap-3" role="search" aria-label="Job search form">
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
                  <time dateTime="2025-07-31" className="text-gray-500 text-sm">2d ago</time>
                </li>
                <li className="flex justify-between">
                  <div><strong>Marketing Coordinator</strong> – MarketMedia</div>
                  <time dateTime="2025-07-31" className="text-gray-500 text-sm">2d ago</time>
                </li>
                <li className="flex justify-between">
                  <div><strong>Data Analyst</strong> – Data Corp</div>
                  <time dateTime="2025-08-01" className="text-gray-500 text-sm">1d ago</time>
                </li>
              </ul>
            </div>

            {/* Featured Jobs */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-[#FF7043]">Featured Jobs</h2>
              <ul className="space-y-4" role="list" aria-label="Featured job listings">
                <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <strong>Sales Representative</strong><br />
                  Global Enterprises – New York, NY
                </li>
