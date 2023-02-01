import React, { useState } from 'react';
import Button from '../button/button';
import Input from '../input';
import styles from './auth.module.css'

const defaultState = {
  username: '',
  password: '',
  email: ''
}
const Auth = () => {

  const [state, setState] = useState(defaultState)
  const [email,setEmail] = useState(false)
  const [userName,setUserName] = useState(false)
  const [password,setPassword] = useState(false)
  const hendlerClick = (e) => {
    setState({...state,
    [e.target.name]:e.target.value
    })
  }
  const hendlerSubmit = (e) => {
    e.preventDefault();
    if(!state.email){
      setEmail(true)
    } else{
      setEmail(false)
    }
    if(!state.username){
      setUserName(true)
    } else{
      setUserName(false)
    }
    if(!state.password){
      setPassword(true)
    } else{
      setPassword(false)
    }
    setState(defaultState)
  }
  return (
    <div className='auth'>
      <form onSubmit={hendlerSubmit} action="form-control">
        <h1>register</h1>
        <div className='form-input'>
          <label htmlFor="">email</label>
          <Input
          status={email}
          type="text"
          name='email'
          placeholder='email'
          onChange={hendlerClick} 
          value={state.email}/>
        </div>
      </form>
      <form onSubmit={hendlerSubmit} action="form-control">
        <div className='form-input'>
          <label htmlFor="">username</label>
          <Input
          status={userName}
          type="text"
          name='username'
          placeholder='username'
          onChange={hendlerClick} 
          value={state.username} />
        </div>
      </form>
      <form onSubmit={hendlerSubmit} action="form-control">
        <div className='form-input'>
          <label htmlFor="">password</label>
          <Input 
          status={password}
          type="password"
          name='password'
          placeholder='password'
          onChange={hendlerClick} 
          value={state.password}/>
        </div>
        <Button>register</Button>
      </form>
    </div>
  );
};

export default Auth;