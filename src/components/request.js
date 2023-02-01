import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Request = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const load = async () => {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=100')
      console.log(responce.data)
      setData(responce.data)
    }
    load()
  },[])
  return (
    <ol>
      {
        data.map(item => {
          return <li key={item.id}>
            {item.title}
            </li>
        })
      }
    </ol>
  );
};

export default Request;