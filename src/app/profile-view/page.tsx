"use client";
import React, { useState } from 'react';
import Header from '@/ui/Header';
import Dialogbox from '@/ui/Dialogbox';

const Page = () => {
  const [showDialog, setShowDialog] = useState(false);

  // Ratings & feedback state
  const [feedbacks, setFeedbacks] = useState([
    { rating: 5, text: "Great teacher! Learned a lot." },
    { rating: 4, text: "Very helpful and patient." },
    { rating: 5, text: "Amazing skills!" },
    { rating: 4, text: "Good experience overall." },
    { rating: 5, text: "Highly recommend." },
    { rating: 4, text: "Learned new tricks." },
    { rating: 5, text: "Very professional." },
    { rating: 4, text: "Fun to work with." },
    { rating: 5, text: "Knows the subject well." },
    { rating: 5, text: "Fantastic experience!" },
    { rating: 4, text: "Would learn again!" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 10;

  const overallRating = (feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(1);
  const indexOfLast = currentPage * feedbacksPerPage;
  const indexOfFirst = indexOfLast - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  return (
    <div className="relative bg-gradient-to-br from-[#B9D6F2] to-[#061A40] min-h-screen">
      <Header />

      {/* Blur content when dialog is open */}
      <div className={`${showDialog ? "blur-sm pointer-events-none" : ""}`}>
        <div className="flex flex-col md:flex-row p-8 text-white">
          {/* Left side */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <div className='mb-6'>
              <button 
                onClick={() => setShowDialog(true)}
                type="button"
                className="bg-gradient-to-r from-[#0353a4] to-[#003555] hover:from-[#003555] hover:to-[#0353a4] text-white font-medium rounded-lg text-sm w-80 px-5 py-2 shadow-md hover:shadow-lg"
              >
                Request
              </button>
            </div>

            {/* Skills Offered */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Skills Offered</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Direct response copywriting</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Customer service</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Sales copywriting</span>
              </div>
            </div>

            {/* Skills Wanted */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Skills Wanted</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Web design</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">SEO</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Video editing</span>
              </div>
            </div>

            {/* Overall Rating & Feedback */}
            <div className="bg-white/10 border border-white/30 rounded-xl p-4">
              <h3 className="text-xl font-semibold mb-2">⭐ Overall Rating: {overallRating} / 5</h3>
              <div className="max-h-80 overflow-y-auto mb-2">
                {currentFeedbacks.map((fb, idx) => (
                  <div key={idx} className="mb-2 border-b border-white/20 pb-2">
                    <p className="text-yellow-400">{"★".repeat(fb.rating)}{"☆".repeat(5 - fb.rating)}</p>
                    <p className="text-gray-200">{fb.text}</p>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={`px-3 py-1 rounded bg-white/20 hover:bg-white/30 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Prev
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={`px-3 py-1 rounded bg-white/20 hover:bg-white/30 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center justify-start mr-0 md:mr-20">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-2 border-white/40"
            />
            <h1 className='text-2xl mt-6 font-semibold'>Nitin Kumar</h1>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:transparent rounded-xl p-6 max-w-lg w-full mx-4">
            <Dialogbox />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowDialog(false)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;