'use client';

import { useState } from 'react';

type ProfileProps = {
  name: string;
  email: string;
  location?: string;
  skillsWanted: string[];
  availability: string;
  rating: number;
  profilePicture?: string;
  isPublic?: boolean;
};

export default function Profile({
  name,
  email,
  location,
  skillsWanted,
  availability,
  rating,
  profilePicture = '/default-avatar.png',
  isPublic = true,
}: ProfileProps) {
  const [profileVisible, setProfileVisible] = useState(isPublic);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6 flex flex-col md:flex-row justify-between items-start md:items-start gap-6">
      
      {/* Profile Details (Left Section) */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">{name}</h2>
        <p className="text-gray-700 mb-1">📧 {email}</p>
        {location && <p className="text-gray-700 mb-1">📍 {location}</p>}
        <p className="text-gray-700 mb-1">⏰ Availability: {availability}</p>
        <p className="text-gray-700 mb-1">⭐ Rating: {rating} / 5</p>

        {/* Skills Wanted */}
        <div className="mt-4">
          <h3 className="text-blue-600 font-semibold">Skills Wanted</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {skillsWanted.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Visibility Toggle */}
        <div className="mt-6">
          <label className="font-medium text-gray-700">🔒 Profile Visibility:</label>
          <select
            value={profileVisible ? 'public' : 'private'}
            onChange={(e) => setProfileVisible(e.target.value === 'public')}
            className="border ml-2 px-3 py-1 rounded text-sm bg-blue-50 text-blue-900"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>

      {/* Profile Picture (Right Section) */}
      <div className="flex-shrink-0">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
        />
      </div>
    </div>
  );
}
