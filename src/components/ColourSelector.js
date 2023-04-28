import React from 'react';

const ColourSelector = ({ config, onBackgroundChange, selectedBackground }) => {
  const { key, label, classname, background } = config;

  const handleClick = () => {
    onBackgroundChange(config);
  }

  const isSelected = background === selectedBackground;

  return (
    <button
      className={`${classname} ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      style={{ background }}
    >
      {isSelected && <i className="fa fa-check"></i>}
      {label}
    </button>
  )
}

export default ColourSelector;
