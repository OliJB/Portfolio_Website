import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import react-toastify

const EmailLink = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      toast.success('Copied to clipboard!', { // Display toast notification
        position: "bottom-center",
        autoClose: 3000, // Adjust duration as needed
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Optional: Reset the copied state after a short delay
      setTimeout(() => setIsCopied(false), 3000); // Match toast duration
    } catch (error) {
      console.error('Failed to copy: ', error);
      toast.error('Failed to copy!', { // Display error toast
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <span
        className="cursor-pointer text-cyan-400"
        onClick={handleCopyClick}
      >
        {email}
      </span>
    </>
  );
};

export default EmailLink;
