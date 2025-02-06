import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EmailLink = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      toast.success('Copied to clipboard!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy: ', error);
      toast.error('Failed to copy!', { 
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
