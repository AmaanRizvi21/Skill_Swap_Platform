import Image from 'next/image';

export default function SwapRequestCard({ request }: { request: any }) {
  const { profilePhoto, name, rating, skillsOffered, skillsWanted, status } = request;

  return (
    <div className="border border-blue-300 bg-white rounded-lg p-4 mb-4 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition">
      {/* Profile and Skills */}
      <div className="flex gap-4 items-start">
        <Image
          src={profilePhoto}
          alt={name}
          width={60}
          height={60}
          className="rounded-full border border-blue-300"
        />
        <div>
          <h2 className="text-lg font-bold text-blue-800">{name}</h2>
          <p className="text-sm text-blue-700">
            <span className="font-semibold text-gray-700">Skills Offered:</span>{' '}
            {skillsOffered.join(', ')}
          </p>
          <p className="text-sm text-blue-600">
            <span className="font-semibold text-gray-700">Skills Wanted:</span>{' '}
            {skillsWanted.join(', ')}
          </p>
          <p className="text-sm text-gray-600">Rating: {rating}/5</p>
        </div>
      </div>

      {/* Status and Action Buttons */}
      <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
        <span className={`text-sm font-semibold ${getStatusColor(status)}`}>
          Status: {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>

        {status === 'pending' && (
          <div className="flex gap-3">
            <button className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm font-semibold">
              Accept
            </button>
            <button className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-semibold">
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case 'pending':
      return 'text-yellow-500';
    case 'accepted':
      return 'text-green-600';
    case 'rejected':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
}
