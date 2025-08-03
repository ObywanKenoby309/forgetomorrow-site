// pages/my-network.js
import Head from 'next/head';

export default function MyNetwork() {
  // Example event handlers replacing inline alert()
  const handleViewProfile = () => alert('View profile feature coming soon!');
  const handleAcceptRequest = () => alert('Accept request coming soon!');
  const handleDeclineRequest = () => alert('Decline request coming soon!');
  const handleCancelRequest = () => alert('Cancel request coming soon!');
  const handleEventDetails = () => alert('Event details coming soon!');

  return (
    <>
      <Head>
        <title>ForgeTomorrow - My Network</title>
      </Head>

      <main className="max-w-6xl mx-auto p-6 space-y-10 min-h-[80vh] bg-[#ECEFF1] text-[#212121]">
        <h1 className="text-4xl font-bold text-[#FF7043] mb-6 text-center">My Network</h1>

        {/* Contacts List */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Contacts</h2>
          <ul className="space-y-4 max-h-72 overflow-y-auto">
            {/* Example Contact */}
            <li
              className="flex items-center space-x-4 p-3 rounded hover:bg-gray-100 cursor-pointer"
              onClick={handleViewProfile}
              role="button"
              tabIndex={0}
              onKeyDown={e => (e.key === 'Enter' ? handleViewProfile() : null)}
            >
              <img
                src="https://via.placeholder.com/48"
                alt="Contact Photo"
                className="rounded-full border-2 border-[#FF7043]"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Jane Doe</p>
                <p className="text-gray-600 text-sm">Open to Opportunities</p>
              </div>
              <button
                className="text-[#FF7043] font-semibold hover:underline"
                onClick={e => {
                  e.stopPropagation();
                  handleViewProfile();
                }}
              >
                View
              </button>
            </li>
            {/* Add more contacts here */}
          </ul>
        </section>

        {/* Pending Requests */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Pending Requests</h2>

          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Incoming Requests</h3>
            <ul className="space-y-3 max-h-48 overflow-y-auto">
              {/* Example Incoming Request */}
              <li className="flex items-center justify-between p-3 rounded border border-gray-300">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Requester Photo"
                    className="rounded-full border-2 border-[#FF7043]"
                  />
                  <p className="font-medium">John Smith</p>
                </div>
                <div className="space-x-3">
                  <button
                    className="bg-[#FF7043] text-white px-3 py-1 rounded hover:bg-[#F4511E]"
                    onClick={handleAcceptRequest}
                  >
                    Accept
                  </button>
                  <button
                    className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-100"
                    onClick={handleDeclineRequest}
                  >
                    Decline
                  </button>
                </div>
              </li>
              {/* Add more incoming requests here */}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-800">Outgoing Requests</h3>
            <ul className="space-y-3 max-h-48 overflow-y-auto">
              {/* Example Outgoing Request */}
              <li className="flex items-center justify-between p-3 rounded border border-gray-300">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Requested Photo"
                    className="rounded-full border-2 border-[#FF7043]"
                  />
                  <p className="font-medium">Emily Rose</p>
                </div>
                <button
                  className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-100"
                  onClick={handleCancelRequest}
                >
                  Cancel
                </button>
              </li>
              {/* Add more outgoing requests here */}
            </ul>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Upcoming Events</h2>
          <ul className="space-y-4 max-h-64 overflow-y-auto">
            {/* Example Event */}
            <li
              className="p-4 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={handleEventDetails}
              role="button"
              tabIndex={0}
              onKeyDown={e => (e.key === 'Enter' ? handleEventDetails() : null)}
            >
              <h3 className="font-semibold text-gray-900">Networking Workshop</h3>
              <p className="text-gray-600">Aug 15, 2025 | 2:00 PM - 4:00 PM</p>
              <p className="text-gray-600 text-sm">Online Webinar with industry coaches.</p>
            </li>
            {/* Add more events here */}
          </ul>
        </section>
      </main>
    </>
  );
}
