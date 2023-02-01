import React,{useState} from 'react';
import axios from 'axios';

const defaultState = {
  title:'',
  body:''
}
const Postrequest = () => {
  
  const [form,setForm] = useState(defaultState)

  axios.defaults.headers = { 'Content-Type': 'application/json; charset=UTF-8' }

  const handlerChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handlerSumbit = async(e) => {
    e.preventDefault()
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{...form,id:Date.now()})
    console.log(response)
  }
  return (
    <form onSubmit={handlerSumbit}>
      <input
      onChange={handlerChange}  
      value={form.title}
      name='title'
      placeholder='title'
      type="text" />
      <input 
      onChange={handlerChange} 
      value={form.body}
      name='body'
      placeholder='body'
      type="text" />
      <input type="submit" hidden />
    </form>
  );
};

export default Postrequest;