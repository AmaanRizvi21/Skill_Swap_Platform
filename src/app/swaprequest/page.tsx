'use client';

import Header from '@/UI_/Header';
import SwapRequestCard from '@/UI_/SwapRequestCard';
import { useState } from 'react';

const mockRequests = [
  {
    id: 1,
    name: 'Marc Demo',
    profilePhoto: '/profile1.png',
    rating: 3.9,
    skillsOffered: ['JavaScript'],
    skillsWanted: ['Photoshop'],
    status: 'pending',
  },
  {
    id: 2,
    name: 'John Smith',
    profilePhoto: '/profile2.png',
    rating: 4.2,
    skillsOffered: ['React'],
    skillsWanted: ['UI/UX'],
    status: 'rejected',
  },
];

export default function SwapRequestPage() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = mockRequests.filter((user) =>
    (!filter || user.status === filter) &&
    (!search || user.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="min-h-screen bg-blue-50 px-4 py-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Swap Requests</h1>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between gap-4 bg-white p-4 shadow-md rounded-md mb-6 border border-blue-200">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-blue-300 p-3 rounded-md bg-blue-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>

          <input
            type="text"
            placeholder="Search by name"
            className="border border-blue-300 p-3 rounded-md bg-blue-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Swap Request Cards */}
        {filtered.length > 0 ? (
          filtered.map((request) => (
            <SwapRequestCard key={request.id} request={request} />
          ))
        ) : (
          <p className="text-center text-blue-800 font-medium mt-6">No matching requests found.</p>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="px-4 py-2 border border-blue-400 text-blue-800 bg-white rounded-md hover:bg-blue-100 transition"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
