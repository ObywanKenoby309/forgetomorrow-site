// pages/pricing.js
import Head from 'next/head';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>ForgeTomorrow - Pricing</title>
      </Head>

      <main className="max-w-7xl mx-auto p-6 space-y-12 min-h-[80vh] bg-[#ECEFF1] text-[#212121]">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#FF7043] mb-4">Choose Your Plan</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Flexible pricing designed to fit your needs — whether you're just starting out or scaling your hiring.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Free</h2>
            <p className="text-4xl font-bold mb-6">
              $0 <span className="text-base font-normal">/ month</span>
            </p>
            <ul className="flex-1 mb-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Smart Job Board access</li>
              <li>Smart Feed Filters</li>
              <li>Private Profile Notes</li>
              <li>Custom Profile Themes</li>
              <li>Ethical Data Use</li>
              <li>TrueEndorse Endorsements</li>
            </ul>
            <button className="mt-auto bg-[#FF7043] hover:bg-[#F4511E] text-white py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>

          {/* Job Seeker Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col border-4 border-[#FF7043]">
            <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Job Seeker</h2>
            <p className="text-4xl font-bold mb-6">
              $29.99 <span className="text-base font-normal">/ month</span>
            </p>
            <ul className="flex-1 mb-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>5 InMail credits per month</li>
              <li>See who viewed your profile (last year)</li>
              <li>Open Profiles</li>
              <li>Top Applicant Job Recommendations</li>
              <li>Company Insights</li>
              <li>Resume Insights</li>
              <li>Access to 22,000+ Learning Courses</li>
              <li>Full Interview Prep Tools</li>
            </ul>
            <button className="mt-auto bg-[#FF7043] hover:bg-[#F4511E] text-white py-3 rounded-lg font-semibold transition-co
