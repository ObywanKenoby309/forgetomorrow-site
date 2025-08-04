// components/ContactsList.js
import React from 'react';
import Image from 'next/image';

export default function ContactsList({ contacts, onViewProfile }) {
  const handleKeyDown = (e, contact) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onViewProfile(contact);
    }
  };

  return (
    <ul className="space-y-4 max-h-72 overflow-y-auto" role="list">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="flex items-center space-x-4 p-3 rounded hover:bg-gray-100 cursor-pointer"
          onClick={() => onViewProfile(contact)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, contact)}
        >
          <div className="relative w-12 h-12 rounded-full border-2 border-[#FF7043] overflow-hidden flex-shrink-0">
            <Image
              src={contact.photo}
              alt={`${contact.name} photo`}
              layout="fill"
              objectFit="cover"
              priority={false}
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{contact.name}</p>
            <p className="text-gray-600 text-sm">{contact.status}</p>
          </div>
          <button
            className="text-[#FF7043] font-semibold hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              onViewProfile(contact);
            }}
            type="button"
          >
            View
          </button>
        </li>
      ))}
    </ul>
  );
}
