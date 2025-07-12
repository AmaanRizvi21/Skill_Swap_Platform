interface UserCardProps {
  name: string;
  offered: string[];
  wanted: string[];
  rating: number;
  isLoggedIn: boolean;
}

export default function UserCard({ name, offered, wanted, rating, isLoggedIn }: UserCardProps) {
  return (
    <div className="border border-blue-200 bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center mb-4 hover:shadow-lg transition">
      {/* Profile Info */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-bold text-blue-800">{name}</h2>
          <p className="text-sm text-blue-700">
            <span className="font-medium text-gray-700">Skills Offered:</span> {offered.join(', ')}
          </p>
          <p className="text-sm text-blue-500">
            <span className="font-medium text-gray-700">Skills Wanted:</span> {wanted.join(', ')}
          </p>
        </div>
      </div>

      {/* Rating & Button */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <p className="text-sm text-gray-600">Rating: {rating}/5</p>
        <button
          className={`px-4 py-2 rounded-md text-white font-medium transition ${
            isLoggedIn
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!isLoggedIn}
        >
          Request
        </button>
      </div>
    </div>
  );
}
