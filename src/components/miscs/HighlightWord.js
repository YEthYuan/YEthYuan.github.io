import React, { useState } from "react";
import styles from "./HighlightWord.module.css";

const HighlightWord = ({ word }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const highlightClass = isHovered ? styles.highlight : "";

  return (
    <span
      className={`${styles.word} ${highlightClass}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {word}
    </span>
  );
};

export default HighlightWord;
