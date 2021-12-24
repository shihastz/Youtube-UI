import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "Raact js",
  "Angular js",
  "use of API",
  "Redux",
  "Music",
  "Coding",
  "Cricket",
  "Football",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
