import React from 'react';

const Selection = ({ applyColor, selectedBackground }) => {
  const handleClick = () => {
    applyColor({ background: selectedBackground });
  }

  const style = {
    background: selectedBackground
  }

  return (
    <div className="fix-box" style={style} onClick={handleClick}>
      <h2 className="subheading">Selection</h2>
    </div>
  )
}

export default Selection;
