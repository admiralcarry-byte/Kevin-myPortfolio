import React from "react";
import { MdClose } from "react-icons/md";
import { FaTelegram, FaEnvelope } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-100 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 transform transition-all duration-300 scale-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <MdClose className="h-6 w-6" />
        </button>
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-dark-orange mb-2">Contact Me</h2>
          <p className="text-gray-600">Let's get in touch!</p>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Telegram */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0">
              <FaTelegram className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Telegram</p>
              <p className="text-lg font-semibold text-gray-800">@quin1410</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0">
              <FaEnvelope className="h-8 w-8 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Email</p>
              <p className="text-lg font-semibold text-gray-800 break-all">admiralcarry@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Feel free to reach out for any inquiries or opportunities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;