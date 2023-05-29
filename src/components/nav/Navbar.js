import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const sortArrayHandler = () => {
    props.startSorting();
  };

  const generateNewArrayHandler = () => {
    props.generateNewArray();
  };

  const handleArraySizeAndSpeedChange = (event) => {
    const newValue = event.target.value;
    props.handleArraySizeAndSpeedChange(newValue);
  };

  const handleSortingAlgorithmChange = (event) => {
    const newValue = event.target.value;
    console.log(`sorting algorithm changed to: ${newValue}`);
    props.setAlgorithm(newValue);
  };

  const renderToggleButton = (value, label) => {
    const isActive = props.algorithm === value;

    return (
      <button
        className={`toggle-button ${isActive ? "active" : ""}`}
        onClick={() => handleSortingAlgorithmChange({ target: { value } })}
      >
        {label}
      </button>
    );
  };

  return (
    <div id="nav-bar">
      <div id="title">
        <h1>Sorting Algorithm Visualizer</h1>
      </div>
      <div id="toolbar">
        <div>
          <label htmlFor="array-size-slider">Array size & sorting speed</label>
          <input
            type="range"
            id="array-size-slider"
            min={5}
            step={5}
            max={100}
            value={props.arraySize}
            onChange={handleArraySizeAndSpeedChange}
            aria-labelledby="array size and sorting speed slider"
          />
        </div>
        <div className="separator" />

        <button className="generate-array-button" onClick={generateNewArrayHandler}>
          Generate New Array
        </button>

        <div className="separator" />
        <div className="toggle-button-group">
          {renderToggleButton("Insertion Sort", "Insertion Sort")}
          {renderToggleButton("Merge Sort", "Merge Sort")}
          {renderToggleButton("Quick Sort", "Quick Sort")}
        </div>
        <div className="separator" />

        <button className="sort-array-button" onClick={sortArrayHandler}>
          Sort!
        </button>
      </div>
    </div>
  );
};

export default Navbar;
