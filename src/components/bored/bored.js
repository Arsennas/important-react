import React, { useState, useEffect } from 'react';
import axios from 'axios'
import s from './bored.module.css'


const Bored = () => {

  const [theActive, setTheActive] = useState(1)
  const [data, setData] = useState({})

  useEffect(() => {
    const load = async () => {
      const responce = await axios.get(`http://www.boredapi.com/api/activity?participants=${theActive}`)
      console.log(responce.data)
      setData(responce.data)
    }
    load()
  }, [])

  const saveClick = async () => {
    const responce = await axios.get(`http://www.boredapi.com/api/activity?participants=${theActive}`)
    console.log(responce.data)
    setData(responce.data)
  }
  
  return (
    <div>
      <p>you will do:{data.activity}</p>
      <div>
        <button style={{ backgroundColor: theActive === 1 ? 'blue' : 'red' }} onClick={() => setTheActive(1)}>1</button>
        <button style={{ backgroundColor: theActive === 2 ? 'blue' : 'red' }} onClick={() => setTheActive(2)}>2</button>
        <button style={{ backgroundColor: theActive === 3 ? 'blue' : 'red' }} onClick={() => setTheActive(3)}>3</button>
        <button style={{ backgroundColor: theActive === 4 ? 'blue' : 'red' }} onClick={() => setTheActive(4)}>4</button>
      </div>
      <div>
        <button onClick={saveClick}>save</button>
      </div>
      <p>price: {data.price} som</p>
    </div>
  );
};

export default Bored;