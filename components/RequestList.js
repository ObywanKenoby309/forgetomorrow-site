// components/RequestList.js
export default function RequestList({
  incomingRequests,
  outgoingRequests,
  onAccept,
  onDecline,
  onCancel,
}) {
  return (
    <>
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Incoming Requests</h3>
        <ul className="space-y-3 max-h-48 overflow-y-auto">
          {incomingRequests.map((request) => (
            <li
              key={request.id}
              className="flex items-center justify-between p-3 rounded border border-gray-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={request.photo}
                  alt={`${request.name} photo`}
                  className="rounded-full border-2 border-[#FF7043]"
                />
                <p className="font-medium">{request.name}</p>
              </div>
              <div className="space-x-3">
                <button
                  className="bg-[#FF7043] text-white px-3 py-1 rounded hover:bg-[#F4511E]"
                  onClick={() => onAccept(request)}
                >
                  Accept
                </button>
                <button
                  className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-100"
                  onClick={() => onDecline(request)}
                >
                  Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2 text-gray-800">Outgoing Requests</h3>
        <ul className="space-y-3 max-h-48 overflow-y-auto">
          {outgoingRequests.map((request) => (
            <li
              key={request.id}
              className="flex items-center justify-between p-3 rounded border border-gray-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={request.photo}
                  alt={`${request.name} photo`}
                  className="rounded-full border-2 border-[#FF7043]"
                />
                <p className="font-medium">{request.name}</p>
              </div>
              <button
                className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-100"
                onClick={() => onCancel(request)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
