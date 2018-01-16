import React from 'react';

const Square = ({ click, className, disable }) => {
  return (
    <div>
      <div className={`square ${className}`}>
        <button style={{backgroundColor: '#2ecc71'}}  disabled={disable} onClick={click}></button>
      </div>
    </div>
  );
};

export default Square;
