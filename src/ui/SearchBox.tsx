'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', search, 'with availability:', availability);
    // Later: trigger filtering logic
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 w-full md:w-2/3">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search skills (e.g., Photoshop)"
        className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="border px-3 py-2 rounded-md text-black"
      >
        <option value="">Availability</option>
        <option value="weekends">Weekends</option>
        <option value="evenings">Evenings</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}