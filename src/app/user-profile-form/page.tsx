"use client";

import React, { useState } from "react";
import Link from "next/link";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    skillsOffered: "",
    skillsWanted: "",
    bio: "",
    isPublic: false,
  });
  const [availableDays, setAvailableDays] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { id, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  };

  const toggleSelection = (
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("location", formData.location);
    form.append(
      "skillsOffered",
      JSON.stringify(formData.skillsOffered.split(",").map((s) => s.trim()))
    );
    form.append(
      "skillsWanted",
      JSON.stringify(formData.skillsWanted.split(",").map((s) => s.trim()))
    );
    form.append("availableDays", JSON.stringify(availableDays));
    form.append("availableTimes", JSON.stringify(availableTimes));
    form.append("isPublic", String(formData.isPublic));
    form.append("bio", formData.bio);

    if (profilePhoto) {
      if (profilePhoto.size / (1024 * 1024) > 1) {
        alert("Profile photo size must be ≤ 1 MB.");
        return;
      }
      form.append("profilePhoto", profilePhoto);
    }

    try {
      const res = await fetch("http://localhost:5000/api/profile", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      alert(data.message || "Profile submitted successfully!");
      console.log("Saved:", data);
    } catch (err) {
      console.error(err);
      alert("Submission failed. See console.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B9D6F2] to-[#061A40] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 border-2 border-white/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-center text-white text-2xl font-semibold mb-4">Skill Swap Profile</h2>

        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Full Name *</label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:bg-white/40 focus:outline-none focus:shadow-lg block w-full p-2.5 placeholder:text-gray-200 mb-4"
        />

        <label htmlFor="location" className="block mb-2 text-sm font-medium text-white">Location</label>
        <input
          id="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter your city"
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:bg-white/40 focus:outline-none focus:shadow-lg block w-full p-2.5 placeholder:text-gray-200 mb-4"
        />

        <label htmlFor="profilePhoto" className="block mb-2 text-sm font-medium text-white">Profile Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePhoto(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-200 mb-4"
        />

        <label htmlFor="skillsOffered" className="block mb-2 text-sm font-medium text-white">Skills Offered *</label>
        <input
          id="skillsOffered"
          type="text"
          required
          value={formData.skillsOffered}
          onChange={handleChange}
          placeholder="e.g. Photoshop, Cooking"
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:bg-white/40 focus:outline-none focus:shadow-lg block w-full p-2.5 placeholder:text-gray-200 mb-4"
        />

        <label htmlFor="skillsWanted" className="block mb-2 text-sm font-medium text-white">Skills Wanted *</label>
        <input
          id="skillsWanted"
          type="text"
          required
          value={formData.skillsWanted}
          onChange={handleChange}
          placeholder="e.g. Guitar, Excel"
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:bg-white/40 focus:outline-none focus:shadow-lg block w-full p-2.5 placeholder:text-gray-200 mb-4"
        />

        <label className="block mb-2 text-sm font-medium text-white">Availability *</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <label key={day} className="flex items-center gap-1 bg-white/20 rounded-lg px-3 py-1 cursor-pointer text-white">
              <input
                type="checkbox"
                checked={availableDays.includes(day)}
                onChange={() => toggleSelection(day, availableDays, setAvailableDays)}
              /> {day}
            </label>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Morning", "Afternoon", "Evening", "Weekend"].map((time) => (
            <label key={time} className="flex items-center gap-1 bg-white/20 rounded-lg px-3 py-1 cursor-pointer text-white">
              <input
                type="checkbox"
                checked={availableTimes.includes(time)}
                onChange={() => toggleSelection(time, availableTimes, setAvailableTimes)}
              /> {time}
            </label>
          ))}
        </div>

        <label className="flex items-center gap-2 mb-4 text-white">
          <input type="checkbox" id="isPublic" checked={formData.isPublic} onChange={handleChange} /> Make Profile Public
        </label>

        <label htmlFor="bio" className="block mb-2 text-sm font-medium text-white">Bio</label>
        <textarea
          id="bio"
          rows={3}
          value={formData.bio}
          onChange={handleChange}
          placeholder="Write something about yourself..."
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:bg-white/40 focus:outline-none focus:shadow-lg block w-full p-2.5 placeholder:text-gray-200 mb-4 resize-none"
        ></textarea>

        <div className='flex justify-center mb-4'>
          <button type="submit" className="text-white font-medium rounded-lg text-sm w-80 px-5 py-2 text-center focus:ring-4 focus:outline-none bg-gradient-to-r from-[#0353a4] to-[#003555] hover:from-[#003555] hover:to-[#0353a4] shadow-md hover:shadow-lg">
            Submit Profile
          </button>
        </div>

        <div className='flex justify-center'>
          <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mb-2 mt-2 w-80 justify-center">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
              <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
            </svg>
            Sign in with Google
          </button>
        </div>

        <div>
          <Link href="/login">
            <h3 className='flex justify-center items-center mt-2 text-blue-400 cursor-pointer hover:underline'>
              Already have an account
            </h3>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;