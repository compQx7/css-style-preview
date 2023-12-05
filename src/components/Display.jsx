import React from 'react';

/**
 * CSS Style Preview - Display Component
 * 
 * @returns {JSX.Element}
 */
const Display = () => {
  return (
    <>
      <h1>Grid Layout</h1>
      <div className="display-grid">
        <div>
          <h2>Item 1</h2>
        </div>
        <div>
          <h2>Item 2</h2>
        </div>
      </div>
      <h1>Flex Layout</h1>
      <div className="display-flex">
        <div>
          <h2>Item 1</h2>
        </div>
        <div>
          <h2>Item 2</h2>
        </div>
      </div>
    </>
  );
}

export default Display;
