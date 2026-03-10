import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Indhuja","Hello!, I'm Indhuja"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    let timer;

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 80);

      if (displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, 50);

      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <span className="border-r-2 border-white pr-1 animate-pulse">
      {displayText}
    </span>
  );
};

export default TextChange;
