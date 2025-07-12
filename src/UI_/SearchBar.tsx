'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', search, 'with availability:', availability);
    // You can pass this data to parent via props or context
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row items-center gap-3 w-full bg-white p-4 rounded shadow-md border border-blue-200"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search skills (e.g., Photoshop)"
        className="w-full md:flex-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900"
      />

      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="px-4 py-2 border border-blue-300 rounded-md bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Availability</option>
        <option value="weekends">Weekends</option>
        <option value="evenings">Evenings</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
      >
        Search
      </button>
    </form>
  );
}
