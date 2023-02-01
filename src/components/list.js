import React, { useState } from 'react';

const List = () => {

  const [number, setNumber] = useState([1, 2, 3])

  const add = () => {
    const num = number[number.length - 1];
    setNumber([...number, num + 1])
  }

  const delet = () => {
    number.splice(-1)
    setNumber([...number])
    }
  return (
    <div className='main'>
      <div className='pp'>
        {
          number.map((elem, index) => {
            return (
              <div key={index}>
                <h1>{elem}</h1>
              </div>
            )
          })
        }
      </div>
      <div className='button'>
        <button onClick={add}>add digit</button>
        <button onClick={delet}>delete digit</button>
      </div>
    </div>
  );
};

export default List;