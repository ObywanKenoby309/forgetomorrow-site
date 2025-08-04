import Head from 'next/head';
import ContactsList from '../components/ContactsList';
// import RequestList from '../components/RequestList';
// import EventList from '../components/EventList';

export default function Contacts() {
  const contacts = [
    { id: 1, name: 'Jane Doe', status: 'Open to Opportunities', photo: 'https://via.placeholder.com/48' },
    // Add more contacts as needed
  ];

  const incomingRequests = [
    { id: 1, name: 'John Smith', photo: 'https://via.placeholder.com/40' },
    // Add more incoming requests here
  ];

  const outgoingRequests = [
    { id: 1, name: 'Emily Rose', photo: 'https://via.placeholder.com/40' },
    // Add more outgoing requests here
  ];

  const events = [
    {
      id: 1,
      title: 'Networking Workshop',
      datetime: 'Aug 15, 2025 | 2:00 PM - 4:00 PM',
      description: 'Online Webinar with industry coaches.',
    },
    // Add more events here
  ];

  const handleViewProfile = (contact) => alert(`View profile for ${contact.name} coming soon!`);
  const handleAcceptRequest = (request) => alert(`Accept request from ${request.name} coming soon!`);
  const handleDeclineRequest = (request) => alert(`Decline request from ${request.name} coming soon!`);
  const handleCancelRequest = (request) => alert(`Cancel request to ${request.name} coming soon!`);
  const handleEventDetails = (event) => alert(`Details for ${event.title} coming soon!`);

  return (
    <>
      <Head>
        <title>ForgeTomorrow - My Contacts</title>
      </Head>

      <main className="max-w-6xl mx-auto p-6 space-y-10 min-h-[80vh] bg-[#ECEFF1] text-[#212121]">
        <h1 className="text-4xl font-bold text-[#FF7043] mb-6 text-center">My Contacts</h1>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">Contacts</h2>
          <ContactsList contacts={contacts} onViewProfile={handleViewProfile}
