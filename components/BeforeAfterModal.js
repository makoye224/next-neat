// BeforeAfterModal.js
import React from 'react';
import BeforeAfter from './BeforeAfter'; // Adjust the path accordingly

const BeforeAfterModal = ({ ba, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ba.map((item, index) => (
            <div key={index} className="p-4">
              <BeforeAfter />
            </div>
          ))}
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterModal;
