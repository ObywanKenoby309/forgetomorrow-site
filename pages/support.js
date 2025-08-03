// pages/support.js
import Head from 'next/head';

export default function Support() {
  return (
    <>
      <Head>
        <title>ForgeTomorrow - Support</title>
      </Head>

      <main className="max-w-4xl mx-auto p-6 space-y-10 min-h-[80vh] bg-[#ECEFF1] text-[#212121]">
        <h1 className="text-4xl font-bold text-[#FF7043] mb-6 text-center">Support Center</h1>

        <section className="bg-white rounded-lg shadow p-8 space-y-6">
          <p className="text-gray-700 text-center max-w-xl mx-auto mb-8">
            We take your experience seriously. If you have questions, feedback, or need assistance, you’re in the right place.
            Our dedicated team is here to help you succeed every step of the way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('FAQs coming soon!')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if(e.key === 'Enter') alert('FAQs coming soon!'); }}
              aria-label="FAQs"
            >
              <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">FAQs</h2>
              <p>Find answers to common questions about using ForgeTomorrow.</p>
            </div>

            <div
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('Contact Us feature coming soon!')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if(e.key === 'Enter') alert('Contact Us feature coming soon!'); }}
              aria-label="Contact Us"
            >
              <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Contact Us</h2>
              <p>
                Need personalized support? Email us anytime at{' '}
                <a href="mailto:forgetomorrowteam@gmail.com" className="text-[#FF7043] underline">
                  forgetomorrowteam@gmail.com
                </a>.
              </p>
            </div>

            <div
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('Tutorials & Guides coming soon!')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if(e.key === 'Enter') alert('Tutorials & Guides coming soon!'); }}
              aria-label="Tutorials and Guides"
            >
              <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Tutorials & Guides</h2>
              <p>Step-by-step instructions and video tutorials to get the most from ForgeTomorrow.</p>
            </div>

            <div
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('Community Forum coming soon!')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if(e.key === 'Enter') alert('Community Forum coming soon!'); }}
              aria-label="Community Forum"
            >
              <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">Community Forum</h2>
              <p>Connect with other users to share tips, ideas, and best practices.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
