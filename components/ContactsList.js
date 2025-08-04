export default function ContactsList({ contacts, onViewProfile }) {
  return (
    <ul className="space-y-4 max-h-72 overflow-y-auto">
      {contacts.map(contact => (
        <li
          key={contact.id}
          className="flex items-center space-x-4 p-3 rounded hover:bg-gray-100 cursor-pointer"
          onClick={() => onViewProfile(contact)}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' ? onViewProfile(contact) : null)}
        >
          <img
            src={contact.photo}
            alt={`${contact.name} photo`}
            className="rounded-full border-2 border-[#FF7043]"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{contact.name}</p>
            <p className="text-gray-600 text-sm">{contact.status}</p>
          </div>
          <button
            className="text-[#FF7043] font-semibold hover:underline"
            onClick={e => {
              e.stopPropagation();
              onViewProfile(contact);
            }}
          >
            View
          </button>
        </li>
      ))}
    </ul>
  );
}
