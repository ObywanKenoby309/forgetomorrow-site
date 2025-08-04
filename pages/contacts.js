import Head from 'next/head';
import ContactsList from '../components/ContactsList';
import RequestList from '../components/RequestList';
import EventList from '../components/EventList';

export default function Contacts() {
  const contacts = [
    { id: 1, name: 'Jane Doe', status: 'Open to Opportunities', photo: 'https://via.placeholder.com/48' },
  ];

  const incomingRequests = [
    { id: 1, name: 'John Smith', photo: 'https://via.placeholder.com/40' },
  ];

  const outgoingRequests = [
    { id: 1, name: 'Emily Rose', photo: 'https://via.placeholder.com/40' },
  ];

  const events = [
    {
      id: 1,
      title: 'Networking Workshop',
      datetime: 'Aug 15, 2025 | 2:00 PM - 4:00 PM',
      description: 'Online Webinar with industry coaches.',
    },
  ];

  function handleViewProfile(contact) {
    alert(`View profile for ${contact.name} coming soon!`);
  }

  function handleAcceptRequest(request) {
    alert(`Accept request from ${request.name} coming soon!`);
  }

  function handleDeclineRequest(request) {
    alert(`Decline request from ${request.name} coming soon!`);
  }

  function handleCancelRequest(request) {
    alert(`Cancel request to ${request.name} coming soon!`);
  }

  function handleEventDetails(event) {
    alert(`Details for ${event.title} coming soon!`);
  }

  return (
    <>
      <Head>
        <title>ForgeTomorrow - My Contacts</title>
      </Head>

      <main className="max-w-6xl mx-auto p-6 space-y-10 min-h-[80vh] bg-[#ECEFF1] text-[#212121]">
        <h1 className="text-4xl font-bold text-[#FF7043] mb-6 text-center">My Contacts</h1>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Contacts</h2>
          <ContactsList contacts={contacts} onViewProfile={handleViewProfile} />
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Pending Requests</h2>
          <RequestList
            incomingRequests={incomingRequests}
            outgoingRequests={outgoingRequests}
            onAccept={handleAcceptRequest}
            onDecline={handleDeclineRequest}
            onCancel={handleCancelRequest}
          />
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Upcoming Events</h2>
          <EventList events={events} onEventDetails={handleEventDetails} />
        </section>
      </main>
    </>
  );
}
