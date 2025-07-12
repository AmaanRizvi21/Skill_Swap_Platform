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

    try {
      if (profilePhoto && profilePhoto.size / (1024 * 1024) > 1) {
        alert("Profile photo size must be ≤ 1 MB.");
        return;
      }

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
      if (profilePhoto) form.append("profilePhoto", profilePhoto);

      const res = await fetch("/api/profile", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Failed to submit");

      alert("Profile submitted successfully!");
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
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-2.5 mb-4"
        />

        <label htmlFor="location" className="block mb-2 text-sm font-medium text-white">Location</label>
        <input
          id="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter your city"
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-2.5 mb-4"
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
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-2.5 mb-4"
        />

        <label htmlFor="skillsWanted" className="block mb-2 text-sm font-medium text-white">Skills Wanted *</label>
        <input
          id="skillsWanted"
          type="text"
          required
          value={formData.skillsWanted}
          onChange={handleChange}
          placeholder="e.g. Guitar, Excel"
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-2.5 mb-4"
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
          className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-2.5 mb-4 resize-none"
        ></textarea>

        <div className='flex justify-center mb-4'>
          <button type="submit" className="text-white font-medium rounded-lg text-sm w-80 px-5 py-2 bg-gradient-to-r from-[#0353a4] to-[#003555] hover:from-[#003555] hover:to-[#0353a4] shadow-md">
            Submit Profile
          </button>
        </div>

        <div className='flex justify-center'>
          <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center mb-2 mt-2 w-80 justify-center">
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