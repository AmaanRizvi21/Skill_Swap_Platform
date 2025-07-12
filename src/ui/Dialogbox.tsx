import React from 'react';

const Dialogbox = () => {
  return (
    <div className="border rounded-xl p-6 max-w-md w-full bg-white">
      <div className="mb-4">
        <label htmlFor="offered-skills" className="block mb-2 text-sm font-medium text-gray-900">
          Choose one of your offered skills
        </label>
        <select
          id="offered-skills"
          defaultValue=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="" disabled>Choose a skill</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="wanted-skills" className="block mb-2 text-sm font-medium text-gray-900">
          Choose one of their wanted skills
        </label>
        <select
          id="wanted-skills"
          defaultValue=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="" disabled>Choose a skill</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
          focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="mt-4 flex justify-center">
        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm w-80 px-5 py-2 text-center"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Dialogbox;
