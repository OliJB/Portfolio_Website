'use client';
import { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowCursor(false), 3000);
    }
  }, [index, text, speed]);

  return (
    <span className="relative">
      {displayedText}
      <span className="blinking-cursor">&nbsp;</span>
    </span>
  );
};

export default Typewriter;
