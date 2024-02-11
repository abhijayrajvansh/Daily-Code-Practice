import React from 'react';

const OriginalComponent = () => {
  // Sample original array
  const originalArray = [1, 2, 3, 4, 5];

  // Transforming the original array (for example, doubling each item)
  const transformedArray = originalArray.map((item, index) => (
    <div key={index}>{item}</div>
  ));


  return (
    <div>
      <h2>Original Array:</h2>
      <div>{originalArray.join(', ')}</div>

      <h2>Transformed Array:</h2>
      {transformedArray}
    </div>
  );
};

export default OriginalComponent;
