// components/EventList.js
export default function EventList({ events, onEventDetails }) {
  return (
    <ul className="space-y-4 max-h-64 overflow-y-auto">
      {events.map((event) => (
        <li
          key={event.id}
          className="p-4 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer"
          onClick={() => onEventDetails(event)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onEventDetails(event)}
        >
          <h3 className="font-semibold text-gray-900">{event.title}</h3>
          <p className="text-gray-600">{event.datetime}</p>
          <p className="text-gray-600 text-sm">{event.description}</p>
        </li>
      ))}
    </ul>
  );
}
