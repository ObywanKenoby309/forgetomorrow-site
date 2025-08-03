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
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <strong>UI/UX Designer</strong><br />
                Design Hub – Remote
              </li>
            </ul>
          </div>
        </section>

        {/* Sidebar: 1/3 width */}
        <aside className="bg-[#37474F] text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">Find your dream job</h2>
            <p className="mb-6 text-sm leading-relaxed">
              Browse through hundreds of job listings and apply to opportunities in seconds.
            </p>
            <button
              className="bg-[#FF7043] hover:bg-[#F4511E] w-full py-3 rounded-lg font-semibold transition-colors"
              aria-label="Create account"
              onClick={() => alert('Create account feature coming soon!')}
            >
              Create Account
            </button>
          </div>
        </aside>
      </main>
    </>
  );
}
